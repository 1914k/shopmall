import {ADD_TO_CART, ADD_COUNT, REDUCE_COUNT, DELETE} from'./mutation-types'

export default {
  addCart(context, payLoad) {
    // 1.查找之前数组中是否含有该商品
    let oldProduct = context.state.cartList.find(item => item.id === payLoad.id)

    // 2.判断 oldProduct
    if(oldProduct) {
      context.commit(ADD_COUNT,oldProduct)
    } else {
      payLoad.count = 1;
      context.commit(ADD_TO_CART, payLoad);
    }
    // console.log(state.cartList);
  },
  reduceCount(context, payLoad) {
    context.commit(REDUCE_COUNT, payLoad);
    if(payLoad.count === 0) {
      context.commit(DELETE,payLoad);
    }
  }
}