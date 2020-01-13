<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detailInfo">
    <detail-tab-control :titles="['图文详情','商品参数','热卖推荐']"/>
    <div class="desc">
      <div class="top-line">
        <div class="line"></div>
        <div class="spot"></div>
      </div>
      <div class="desc-item">
        {{detailInfo.desc}}
      </div>
      <div class="bottom-line">
        <div class="line"></div>
        <div class="spot"></div>
      </div>
    </div>
    <ul v-for="item in detailInfo.list" :key="item.key">
      <li class="item-text">
        <div class="list-title">{{item.key}}</div>
        <div class="item-desc">{{item.desc}}</div>
      </li>
      <li v-for="(imgs, index) in item.list" :key="index">
        <div class="item-image">
          <img :src="imgs" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import DetailTabControl from './DetailTabControl'

  export default{
    name: 'DetailInfo',
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mounted() {
      console.log(this.detailInfo);
      
    },
    components: {
      DetailTabControl
    }
  }
</script>

<style scoped>
  .desc {
    position: relative;
    margin-top: 20px;
    padding: 0 15px;
  }
  .desc-item {
    font-size: 14px;
    line-height: 20px;
    padding: 15px 0;
  }
  .top-line {
    position: relative;
  }
  .bottom-line {
    position: relative;
    display: flex;
    justify-content: flex-end;
    top: -4px;
  }
  .spot {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #000;
    border-radius: 50%;
  }
  .line {
    position: absolute;
    width: 80px;
    height: 1px;
    background-color: #888;
    top: 2px;
  }
  .item-image img {
    width: 100%;
  }
  .item-text {
    padding: 5px 10px 10px 10px;
    margin: 5px ;
    font-size: 14px;
    color: #000;
  }
  .item-desc {
    font-size: 12px;
    color: #888;
    text-indent:  1rem;
    line-height: 18px;
  }
</style>