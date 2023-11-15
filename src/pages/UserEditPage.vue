<template>
    <!-- form表单 完成获取数据并修改 -->
<van-form @submit="onSubmit">
  
    <van-field
      v-model="editUser.currentValue"
      :name="editUser.editName"
      :label="editUser.editName"
      :placeholder="`请输入:${editUser.editName}`"
    />
    
  
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

</template>

<script setup>
import {ref} from 'vue';
import {useRoute} from 'vue-router';

    const route = useRoute();
    const editUser = ref({
        editKey:route.query.editKey,
        editName:route.query.editName,
        currentValue:route.query.currentValue,
    });
    const test1 = "123";
    const onSubmit = (value) => {
      console.log("提交"+editUser.value.currentValue);
    }
</script>

<style scoped>

</style>