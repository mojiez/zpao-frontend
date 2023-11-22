<template>
    <van-cell title="id" :value="user.id" />
    <van-cell title="名称" :value="user.userName" @click="toEdit('userName','昵称',user.userName)"/>
    <van-cell title="账户" :value="user.userAccount" @click="toEdit('userAccount','账户',user.userAccount)" />
    <van-cell title="头像" >
        <img style="height: 48px" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="性别" :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="状态" :value="user.userState" />
    <van-cell title="角色" :value="user.role" />
    <!-- <van-cell title="标签" :value="" /> -->
    <van-cell title="创建时间" :value="user.createTime" />
</template>

<script setup lang='ts'>
// import {userInfo} from '../assets/user'
import {useRouter} from 'vue-router';
import { onMounted, onUpdated, onUnmounted } from 'vue'
import myAxios from '../plugins/myAxios';
import {showToast,showFailToast,showSuccessToast} from 'vant/lib/vant.es';
import {ref} from 'vue';
import {getCurrentUser} from '../services/user';
// 每次都要调用后端来获取用户信息 会不会很麻烦 能不能使用一个共享的缓存？？
// 使用共享的缓存要解决数据更新的问题

// 后端是传入 httpserverletrequest
onMounted(async () => {
    // const res = await myAxios.get('/user/current');
    // if(res.success){
    //     user.value = res.data.currentUser;
    //     showSuccessToast('获取用户信息成功');
    // }else{
    //     showFailToast('获取用户信息失败');
    // }
    const res = await getCurrentUser();
    if(res){
        user.value = res;
        showSuccessToast('获取用户信息成功');
    }else{
        showFailToast('获取用户信息失败');
    }
});

// const user = ref({
//     id: 1,
//     userName: "zhangshan",
//     userAccount: "114514",
//     avatarUrl: "https://tupian.qqw21.com/article/UploadPic/2018-6/20186182127277279.jpg",
//     gender: 1,
//     // 在数据里定义的类型是Integer 这里是string why？
//     userState: "0",
//     role: "0",
    
//     tag: ["python","java"],
//     createTime: new Date(),
// });
const user = ref({});
const router = useRouter();
const toEdit = (editKey: string,editName: string,currentValue: string) => {
    router.push({
        path:'/user/edit',
        query: {
            editKey,
            // key 英文
            editName,
            // name 中文
            currentValue,
            // currentvalue 传过来的值
        }
    })
};
</script>

<style scoped>

</style>