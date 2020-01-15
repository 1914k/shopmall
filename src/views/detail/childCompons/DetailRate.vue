<template>
  <div v-if="Object.keys(rate).length !== 0" class="rate">
    <router-link to="/home" class="title">
      <span>买家评论 {{rate.cRate}} <i> | </i> 销量 {{getSales}}</span> 
      <span class="icon-arrow-rigth iconfont rigth"></span>
    </router-link>
    <div class="tags">
      <span class="tags-item" v-for="item in rate.rateTags" :key="item.num">
        {{item.value}} ({{item.num}})
      </span>
    </div>
    <div v-for="(item, index) in rate.list" :key="index" class="list">
      <div class="list-item">
        <div class="item-user">
          <a class="item-data" href="">
            <div class="img">
              <img :src="item.user.avatar" alt="">
            </div>
            <span class="name">{{item.user.uname}}</span>
          </a>
        </div>
        <div class="content">{{item.content}}</div>
        <div class="item-date">{{item.created | showDate}}</div>
        <div class="item-extra">
          <span v-for="i in item.extraInfo" :key="i">{{i}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from 'common/utils'

  export default{
    name: 'DetailRate',
    props: {
      rate: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
      // console.log(15093/1000);
    },
    computed: {
      getSales() {
        return this.rate.sales > 10000 ? parseInt(this.rate.sales/1000)/10 + 'W' : this.rate.sales;
      }
    },
    filters: {
      showDate(value) {
        // 1. 将时间戳转成 Date 对象
        const date = new Date(value * 1000);
        // 2. 将 date 进行格式化
        return formatDate(date, 'yyyy-MM-dd') 

      }
    }
  }
</script>

<style scoped>
  .rate {
    position: relative;
    padding: 0 13px;
    font-size: 12px;
    line-height: 18px;
    border-bottom: 10px solid #eee;
    border-top: 10px solid #eee;
  }
  .title {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
  }
  .tags {
    display: flex;
    flex-wrap: wrap
  }
  .tags-item {
    background-color: #FFE8EE;
    color: #FF2255;
    margin: 4px 4px 0 0;
    padding: 0 5px;
    line-height: 24px;
  }
  .list {
    padding: 12px; 
  }
  .item-data {
    height: 100%;
    display: block;
    display: flex;
  }
  .img {
    padding: 1px;
    box-sizing: border-box;
    /* display: inline-block; */
  }
  .img img {
    width: 26px;
  }
  .name {
    margin-left: 9px;
    padding-bottom: 5px;
    /* display: inline-block; */
    line-height: 30px;
    font-size: 14px;
  }
  .content {
    margin-top: 4px;
  }
  .item-date {
    margin-top: 6px;
  }
  .item-extra span {
    padding-right: 6px;
  }
</style>