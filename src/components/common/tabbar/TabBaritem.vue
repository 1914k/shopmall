<template>
	<div class="tab-bar-item" @click="itemClick">
      <div v-if='!isActive'><slot name='item-icon'></slot></div>
      <div v-else><slot name='item-icon-active'></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
	export default{
		name: 'TabBarItem',
		props: {
			path: String,
			activeColor: {
				type :String,
				default: "pink"
			}
		},
		data() {
			return {
				// isActive: false
			}
		},
		computed:{
			isActive(){
				// console.log(this.activeColor);
				// console.log(this.$route.path);
				// $route 是当前活跃的路由
				// console.log(this.path);
				// console.log(this.$route.path);
				return this.$route.path.indexOf(this.path) === 1;
			},
			activeStyle(){
				// console.log(this.activeColor);
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods:{
			itemClick(){
				if(this.$route.path.indexOf(this.path) !== 1){
					this.$router.replace(this.path)
				}
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>