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
    <template v-if="active === 'home'">
      <Index></Index>
    </template>
    <template v-if="active === 'friends'">
      <Team></Team>
    </template>
  </div>

  <van-tabbar v-model="active" @change="Onchange">
  <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
  <van-tabbar-item name="user" icon="search">用户页</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">队伍页</van-tabbar-item>
  <!-- <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item> -->
</van-tabbar>

</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant/lib/vant.es';
import Index from '../pages/Index.vue';
import Team from '../pages/Team.vue';

  const active = ref('home');
  const onClickLeft = () => alert('左');
  const onClickRight = () => alert('右');
  const Onchange = (name) => showToast(`标签${name}`);

</script>

<style scoped>

</style>