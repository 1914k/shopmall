<template>
  <div v-if="Object.keys(params).length !== 0" class="params">
    <table class="size">
      <tr v-for="(items,index) in params.tables" :key="index">
        <td v-for="item in items" :key="item">{{item}}</td>
      </tr>
    </table>
    <ul class="set">
      <li class="set-item" v-for="(item, key) in params.set" :key="key">
        <span class="key">{{key}}</span>
        <span class="item">{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'DetailParams',
    props: {
      params:{
        type: Object,
        default() {
          return {}
        }
      }
    },
    mounted() {
      console.log(this.params.tables);
    }
  }
</script>

<style scoped>
  .params {
    margin-top: 17px;
    padding: 0 13px;
    font-size: 12px;
    line-height: 20px;
  }
  .size {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    color: #eb4868;
    padding: 1px;
    line-height: 35px;
  }
  .size tr {
    border-bottom: 1px solid #eee;
  }
  .size td:first-of-type {
    width: 28%;
  }
  .size tr:first-of-type, .size td:first-of-type {
    color: #666;
  }
  .set {
    list-style: none;
  }
  .set-item {
    padding: 5px 0;
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .key {
    width: 28%;
  }
  .item {
    color: #eb4868
  }
</style>