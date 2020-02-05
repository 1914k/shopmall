import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建 store 对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payLoad) {
      // payLoad 添加商品
      // let oldProduct = null;
      // for(let item of state.cartList) {
      //   if(item.id === payLoad.id) {
      //     oldProduct = item;
      //   }
      // }

      // 1.查找之前数组中是否含有该商品
      let oldProduct = state.cartList.find(item => item.id === payLoad.id)

      // 判断 oldProduct
      if(oldProduct) {
        oldProduct.count += 1;
      } else {
        payLoad.count = 1;
        state.cartList.push(payLoad);
      }
      console.log(state.cartList);
    }
  }
})

// 3.挂载 Vue 实例上
export default store