<template>
    主页 test git branch
    <van-cell center title="心动模式">
        <template #right-icon>
        <van-switch v-model="isMatchMode" size="24" />
        </template>
    </van-cell>
    <van-card v-for="user in userList"
    :desc="user.profile"
    :title='`${user.userName}(${user.role})`'
    :thumb="user.avatarUrl"
    >
    <template #tags>
        <van-tag v-for="tag in user.tags" type="primary">{{tag}}</van-tag>
    </template>

    <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
    </template>
    </van-card>
</template>

<script setup>
import {ref,watchEffect} from 'vue';
import {useRoute} from 'vue-router';
import myAxios from '../plugins/myAxios';
import qs from 'qs';
import { onMounted, onUpdated, onUnmounted } from 'vue'
import {showToast,showFailToast,showSuccessToast} from 'vant/lib/vant.es';
    const userList = ref([]);
    onMounted(async() => {
        const list = await myAxios.get('/user/recommend',{
            // 允许跨域携带cookie信息
            withCredentials:true,
            params: {
                pageNum: 1,
                pageSize: 6,
            }
        })
        .then(response => {
            console.log('/user/recommend success',response);
            showSuccessToast('获取推荐成功');
            return response?.data?.records;
        })
        .catch( error => {
            console.log('/user/recommend failed',error);
            showFailToast('获取推荐失败');
        })

        // if(userListData){
        //     userListData.forEach(user => {
        //         console.log(user);
        //         if(user.tags){
        //             user.tags = JSON.parse(user.tags);
        //         }
        //     });
        //     userList.value = userListData;
        // }

        if(list){
            list.forEach(user => {
                if(user.tags){
                    user.tags = JSON.parse(user.tags)
                }
            });
            userList.value = list;
        }
        // 要记得加 value
        
    });
    const isMatchMode = ref(false);

    /**
     * 加载数据
     */
    const loadData = async () => {
        let userListData;

        // 心动模式
        if (isMatchMode.value) {
            const num = 3;
            userListData = await myAxios.get('/user/match', {
                params : {
                    num,
                },
                withCredentials:true,
            })
            .then(function (response) {
                showSuccessToast('请求成功');
                return response?.data;
            })
            .catch(function (error) {
                showFailToast('请求失败');
            });
        }else {
            // 普通用户执行分页查询
            userListData = await myAxios.get('/user/recommend', {
                params: {
                    pageNum: 1,
                    pageSize: 6,
                },
                withCredentials:true,
            })
            .then(response => {
                console.log('/user/recommend success',response);
                showSuccessToast('获取推荐成功');
                return response?.data?.records;
            })
            .catch( error => {
                console.log('/user/recommend failed',error);
                showFailToast('获取推荐失败');
            });

        }
        // 如果说userListData取到值了
        if(userListData) {
            userListData.forEach((user) => {
                if(user.tags) {
                    user.tags = JSON.parse(user.tags);
                }
            })
            userList.value = userListData;
        }
    };

    watchEffect( () => {
        loadData();
    });

</script>

<style scoped>

</style>