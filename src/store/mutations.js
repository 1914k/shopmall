export default {
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
    // console.log(state.cartList);
  }
}