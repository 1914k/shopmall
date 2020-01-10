import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Shopcart = () => import('views/shopcart/Shopcart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')

// 安装插件
Vue.use(Router)

const routes = [
  {
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/shopcart',
		component: Shopcart
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/detail/:id',
		component: Detail
	}
]
const router = new Router({
  routes,
  mode: 'history'
})

export default router