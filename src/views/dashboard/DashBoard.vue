<template>
    <div id="dashboard">
      <van-tabbar v-model="active" active-color="#75a342">
        <van-tabbar-item replace to="/dashboard/home">
          <span>首页</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item  replace to="/dashboard/category">
          <span>分类</span>
          <template #icon="props">
            <img :src="props.active ? category_icon.active : category_icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item  replace to="/dashboard/cart">
          <span>购物车</span>
          <template #icon="props">
            <img :src="props.active ? cart_icon.active : cart_icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item  replace to="/dashboard/mine">
          <span>我的</span>
          <template #icon="props">
            <img :src="props.active ? mine_icon.active : mine_icon.inactive" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: require('@/images/tabbar/home_selected.png'),
        inactive: require('@/images/tabbar/home_default.png'),
      },
      category_icon:{
        active: require('@/images/tabbar/category_selected.png'),
        inactive: require('@/images/tabbar/category_default.png')
      },
      cart_icon:{
        active: require('@/images/tabbar/shoppingcart_selected.png'),
        inactive: require('@/images/tabbar/shoppingcart_default.png')
      },
      mine_icon:{
        active: require('@/images/tabbar/mine_selected.png'),
        inactive: require('@/images/tabbar/mine_default.png')
      },

    };
  },
}
</script>
<style lang="less" scoped>
    #dashboard{
      width: 100%;
      height: 100%;
      background: #f5f5f5;
    }
</style>