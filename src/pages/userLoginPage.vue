<template>
    <van-form @submit="onSubmit">
    <van-cell-group inset>
        <van-field
        v-model="userAccount"
        name="用户账户"
        label="用户账户"
        placeholder="用户账户"
        :rules="[{ required: true, message: '请填写用户账户' }]"
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
        <button type="button" class="add-button">
        提交
        </button>
    </div>
    </van-form>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter,useRoute} from 'vue-router';
import myAxios from '../plugins/myAxios'
import {showToast,showFailToast,showSuccessToast} from 'vant/lib/vant.es';
// import '../global.css'

    const userAccount = ref('');
    const password = ref('');
    const router = useRouter();
    const route = useRoute();
    
    // console.log(route.query)
    const onSubmit = async () => {
        // 这里调用后端接口 所以要异步
        const res = await myAxios.post('/user/login',{
            // 记得 .value
            account: userAccount.value,
            password: password.value,
        })
        console.log(res,'用户登录');
        if(res.success && res.data.safetyUser){
            showSuccessToast('登录成功');
            
            const redirectUrl = route.query?.redirect ?? '/';
            // router.replace(redirectUrl);
            window.location.href = redirectUrl;
        }else{
            showFailToast('登录失败');
        }
    };

</script>

<style scoped>

</style>