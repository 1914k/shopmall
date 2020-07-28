<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
       <img src="@/assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <span class="title-item" 
            :class="{active: currentIndex === index}" 
            v-for="(item, index) in titles" :key="index"
            @click="itemClick(index)">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar'

  export default{
    name: "DetailNavBar",
    props: {
      titleH:{
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        titles: ['商品', '评论', '参数', '推荐'],
        currentIndex: 0,
        scrollTop: {
          type: Number,
          default() {
            return 0
        }
      }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick',index);
        // console.log(this.titleH);        
      },
      backClick() {
        this.$router.back();
        // this.$router.go('-1');
      },
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
        document.body.scrollTop;
        // console.log(scrollTop);
        this.scrollTop = scrollTop;
        if(scrollTop < this.titleH[1]) {
          this.currentIndex = 0;
          } else if(scrollTop < this.titleH[2]) {
            this.currentIndex = 1;
            } else if(scrollTop < this.titleH[3]) {
              this.currentIndex = 2;
              } else if(scrollTop > this.titleH[3]) {
                this.currentIndex = 3;
                }
        // console.log(this.titleH);
        // console.log(this.currentIndex);
        
      }
    },    
    components: {
      NavBar
    },
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex: 1
  }
  .active {
    color: var(--color-high-text)
  }
  .back img {
    height: 25px;
    margin-top: 10px;
  }
</style>