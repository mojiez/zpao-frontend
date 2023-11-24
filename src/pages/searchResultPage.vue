<template>
<!-- <van-card v-for="user in userList" -->
    <van-card v-for="user in mockUser"
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
import {ref} from 'vue';
import {useRoute} from 'vue-router';
import myAxios from '../plugins/myAxios';
import qs from 'qs';
import { onMounted, onUpdated, onUnmounted } from 'vue'

    const route = useRoute();
    const userList = ref([]);
    onMounted(async () => {
        // 生命周期钩子函数， 在组件实例化前被调用

        // 下面的写法是http://localhost:8080/api/user/search/tags?tagList[]=java&tagList[]=python 
        // myAxios.get('/user/search/tags',{
        //     params: {
        //         tagList: tags,
        //     }
        // })
        // .then(response => {
        //     console.log('user/search/tags',response);
            
        // })
        // .catch(error => {
        //     console.log('user/search/tags',error);
        // })

        // 正确的写法应该是
        // http://localhost:8080/api/user/search/tags?tagList=cao 
        // 如何去掉[] ? —— 序列化!

        const userListData = await myAxios.get('/user/search/tags',{
            params: {
                tagList: tags,
            },
            paramsSerializer: {
                serialize: params => qs.stringify(params, { indices: false}),
            }
        })
        .then(response => {
            console.log('user/search/tags',response);
            // this.userList.value = response.data;
            return response.data?.data;
        })
        .catch(error => {
            console.log('user/search/tags',error);
        })
        
        if(userListData){
            userListData.forEach(user => {
                console.log(user);
                if(user.tags){
                    user.tags = JSON.parse(user.tags);
                }
            });
            userList.value = userListData;
        }
    });
    // console.log(route.query.tagList);
    // const {tagList} = route.query;
    // const {tags} = route.query;
    const tags = ["java","python"];

    const mockUser = ref([{
    id: 931,
    username: '沙鱼',
    userAccount: 'shayu',
    profile: '一条咸鱼',
    gender: 0,
    phone: '123456789101',
    email: 'shayu-yusha@qq.com',
    planetCode: '931',
    avatarUrl: 'https://th.bing.com/th/id/OIP.jfY4nQPLuqb-gEi62_zobgAAAA?rs=1&pid=ImgDetMain',
    tags: ['java', 'emo', '打工中', 'emo', '打工中'],
    createTime: new Date(),
    }])

    

    // 根据传回来的标签搜索用户
    // 使用axios接收和发送请求

</script>

<style scoped>

</style>