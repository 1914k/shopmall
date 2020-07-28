import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue){
  console.log('执行了 obj 的 install 函数！');
  // Vue.extend()
  // console.log(Toast.$el);
  // document.body.appendChild(Toast.$el)

  // 1.创建组件构造器，传入组件对象
  const toastContrustor = Vue.extend(Toast)

  // 2.new 组件构造器的方式，根据组件构造器，恶意创建出来一个组件对象
  const toast = new toastContrustor()

  // 3.将组件对象手动挂载到某一个div元素上
  toast.$mount(document.getElementById('contentpay'))

  // 4. toast.$el 对应的就是 div 
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = Toast; 
}

export default obj