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
import {useRoute,useRouter} from 'vue-router';
import myAxios from '../plugins/myAxios';
import {getCurrentUser} from '../services/user';
import {showToast,showFailToast,showSuccessToast} from 'vant/lib/vant.es';
    const router = useRouter();
    const route = useRoute();
    // key英文
    // name中文
    // value传过来的值

    const editUser = ref({

        editKey:route.query.editKey,
        editName:route.query.editName,
        currentValue:route.query.currentValue,
    });
    
    const onSubmit = async (value) => {
      console.log("提交"+editUser.value.currentValue);
      // 先获取当前的用户
      const currentUser = await getCurrentUser();
      if(!currentUser){
        showFailToast('用户未登录');
        return;
      }

      const res = await myAxios.post('/user/update',{
        // 传一个user 一个request todo
        // 其实不是要你串user 只需要穿要修改的user的id 还有对应修改的key和value就行


        // TODO 只传过去一个id role 其他的值都是null 无权限 TODO
        'id':currentUser.id,
        [editUser.value.editKey]:editUser.value.currentValue,
      })
      
      if(res.code === 0 && res.data >0){
        showSuccessToast('修改成功');
        router.back();
      }else{
        showFailToast('修改失败');
      }
    }
</script>

<style scoped>

</style>