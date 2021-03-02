<template>
    <div id="home">
      <div v-if="!showLoading">
        <Header />
        <Sowing :sowing_list="sowing_list"/>
        <Nav :nav_list="nav_list"/>
        <FlashSale :flashsale_list='flashsale_list'/>
        <YouLike :youlike_list="youlike_list"/>
      </div>
    </div>
</template>
<script>
import Header from './components/Header/Header'
import Sowing from './components/sowing/Sowing'
import Nav from './components/nav/Nav'
import FlashSale from './components/flashSale/FlashSale'
import YouLike from './components/youlike/YouLike'
import {getHomeData} from '@/service/api/index'
import {Toast} from 'vant'
export default {
  data() {
    return {
      //首页的轮播图数据
      sowing_list:[],
      //首页导航的数据
      nav_list:[],
      //首页限时抢购数据
      flashsale_list:[],
      //首页猜你喜欢数据
      youlike_list:[],
      //是否显示加载图标
      showLoading:false
    }
  },
  created() {
    this.reqData()
  },
  methods: {
    async reqData(){
      let res=await getHomeData()
      if(res.success){
        console.log(res.data)
        this.sowing_list=res.data.list[0].icon_list
        this.nav_list=res.data.list[2].icon_list
        this.flashsale_list=res.data.list[3].product_list
        this.youlike_list=res.data.list[12].product_list
      }
    }
  },
  components:{
    Header,
    Sowing,
    Nav,
    FlashSale,
    YouLike
  }
}
</script>
<style lang="less" scoped>
    #home{
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
    }
</style>