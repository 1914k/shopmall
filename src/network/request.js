import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 1000
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res =>{
    return res
  }, err => {
    console.log(err);
    
  })

  // 发送真正的请求
  return instance(config)
}












// import axios from 'axios'
// export function request(config) {
//   // 创建axios 实例
//   const instance = axios.create({
//     baseURL: 'http',
//     timeout: 5000
//   })

//   // 请求拦截
//   instance.interceptors.request.use(config => {
//     return config
//   },err => {

//   })

//   // 响应拦截
//   instance.interceptors.response.use(res => {
//     return res
//   },err => {
//     console.log(err);
//   })

//   // 发送真正的网络请求
//   return instance(config)
// }
