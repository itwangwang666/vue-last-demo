<template>
  <div id="app">
    <transition name="shop">
      <router-view/>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="search" to="/news">新闻</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      }
    };
  }
};
</script>
<style lang="less">
#app{
  padding-bottom: 50px;
  overflow-x: hidden;
}
.shop-enter{
  opacity: 0;
  transform: translateX(100%);
  
}
.shop-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.shop-enter-active,
.shop-leave-active {
  transition: all 1s ease;
}
</style>
