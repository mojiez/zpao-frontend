<template>
  <van-nav-bar
      title="标题"
      left-text="返回" left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
  <template #right>
    <van-icon name="search" size="18" />
  </template>
  </van-nav-bar>

  <div id="content">
    <router-view></router-view>
  </div>

  <van-tabbar route>
  <van-tabbar-item name="home" icon="home-o" replace to="/">主页</van-tabbar-item>
  <van-tabbar-item name="user" icon="search" replace to="/user">用户页</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o" replace to="/team">队伍页</van-tabbar-item>
  <!-- <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item> -->
</van-tabbar>

</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant/lib/vant.es';

  const active = ref('home');
  const onClickLeft = () => alert('左');
  const onClickRight = () => alert('右');
  

</script>

<style scoped>

</style>