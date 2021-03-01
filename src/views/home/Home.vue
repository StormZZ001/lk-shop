<template>
    <div id="home">
      <div v-if="!showLoading">
        <Header />
      </div>
    </div>
</template>
<script>
import Header from './components/Header/Header'
import {getHomeData} from '@/service/api/index'
export default {
  data() {
    return {
      showLoading:false
    }
  },
  components:{
    Header
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