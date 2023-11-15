<template>
    <van-cell title="id" :value="user.id" />
    <van-cell title="名称" :value="user.userName" @click="toEdit('userName','昵称',user.userName)"/>
    <van-cell title="账户" :value="user.userAccount" />
    <van-cell title="头像" >
        <img style="height: 48px" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="性别" :value="user.gender" @click="toEdit('userName','昵称',user.gender)"/>
    <van-cell title="状态" :value="user.userState" />
    <van-cell title="角色" :value="user.role" />
    <!-- <van-cell title="标签" :value="" /> -->
    <van-cell title="创建时间" :value="user.createTime.toISOString()" />
</template>

<script setup lang='ts'>
// import {userInfo} from '../assets/user'
import {useRouter} from 'vue-router';
const user = {
    id: 1,
    userName: "zhangshan",
    userAccount: "114514",
    avatarUrl: "https://tupian.qqw21.com/article/UploadPic/2018-6/20186182127277279.jpg",
    gender: 1,
    // 在数据里定义的类型是Integer 这里是string why？
    userState: "0",
    role: "0",
    
    tag: ["python","java"],
    createTime: new Date(),
};

const router = useRouter();
const toEdit = (editKey: string,editName: string,currentValue: string) => {
    router.push({
        path:'/user/edit',
        query: {
            editKey,
            editName,
            currentValue,
        }
    })
};
</script>

<style scoped>

</style>