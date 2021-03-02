<template>
<swiper id="swiper" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="sowing in sowing_list" :key="sowing.public_id">
        <img :src="sowing.icon_url" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    props:{
        sowing_list:Array
    },
    data() {
      return {
        swiperOptions: {
          notNextTick:true,
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          //循环
          loop:true,
          //切换时长
          autoplay:{
              delay:1000
          },
          //速度
          speed:600
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    components:{
        Swiper,
        SwiperSlide
    }
}
</script>
<style lang="less" scoped>
    #swiper{
      padding-top: 3rem;
      text-align: center;
      width: 100%;
      height: 14rem;
      background-color: transparent;
    }
    #swiper img{
      width: 100%;
      height: 100%;
    }
    /*
      穿透修改样式
    */
    .swiper-pagination /deep/.swiper-pagination-bullet-active{
        background-color: #75a342;
    }
</style>