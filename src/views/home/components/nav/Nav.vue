<template>
    <ul class="nav_list">
        <li class="nav" v-for="nav in nav_list" :key="nav.cid">
            <a href="#" class="nav-link">
                <div class="image">
                    <img :src="nav.icon_url" class="nav-img" alt="">
                </div>
                <p class="nav-name">{{nav.name}}</p>
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        nav_list:Array
    }
}
</script>
<style lang="less" scoped>
    .nav_list{
        padding-top: .9375rem;
        background: #fff;
        padding-bottom: .9375rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .nav{
        padding-top: .3125rem;
        width: 20%;
        display: flex;
    }
    .nav-link{
      display: flex;
      flex-direction: column;
      color:#000;
      font-size:0.75rem;
      text-align: center;
    }
    .image{
      width: 100%;
      overflow: hidden;
      margin-bottom: 0.2rem;
    }
    .nav-img{
      width: 58%;
      margin: 0 auto;
    }
</style>