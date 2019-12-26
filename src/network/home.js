import {request} from './request';

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}


// 函数调用 -> 压入函数栈（保存函数调用过程中的所有变量）
// 函数调用结束 -> 弹出函数栈（释放函数所有的变量）
// function test() {
//   const names = ["aaa","bbb"]
// }
// test()
// 即test 执行完之后变量 names 没有意义了

