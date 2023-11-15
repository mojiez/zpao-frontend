<template>
    <!-- form表单 完成获取数据并修改 -->
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="edi"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

</template>

<script setup>
import {ref} from 'vue';
import useRoute from 'vue-router'
    const route = useRoute();
    const editUser = ref({
        editKey:route.query.editKey,
        editName:route.query.editName,
        currentValue:route.query.currentValue,
    })
</script>

<style scoped>

</style>