import {ADD_COUNT, ADD_TO_CART, REDUCE_COUNT, DELETE} from'./mutation-types'

export default {
  // mutations 唯一的目的就是修改 state 中的状态
  // mutations 中的每个方法尽可能完成的事情比较单一

  [ADD_COUNT](state, payLoad) {
    payLoad.count++;
    state.cartList.splice(state.cartList.indexOf(payLoad), 1, payLoad);
    // console.log('加', payLoad.count);
  },
  [ADD_TO_CART](state, payLoad) {
    state.cartList.push(payLoad);
  },
  [REDUCE_COUNT](state, payLoad) {
    payLoad.count -= 1;
    state.cartList.splice(state.cartList.indexOf(payLoad), 1, payLoad);
    // console.log('减', payLoad.count)
  },
  [DELETE](state, payLoad) {
    state.cartList.splice(state.cartList.indexOf(payLoad), 1)
  }
}
