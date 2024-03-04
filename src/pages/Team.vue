<template>
    <div id="teamPage">
        <van-search v-model="searchText" placeholder="请输入搜索关键词" @search="onSearch"/>
        <van-button type="primary" @click="doJoinTeam">加入队伍</van-button>
        <team-card-list :teamList = "teamList"/>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import TeamCardList from '../component/TeamCardList.vue'
import {onMounted,ref} from "vue";
import myAxios from '../plugins/myAxios'
import {showToast,showFailToast,showSuccessToast} from 'vant/lib/vant.es';

const teamList = ref ([]);

const router = useRouter();
const doJoinTeam = () => {
    // 跳转到加入队伍的页面
    router.push({
        path: "/addteam"
    })
}
const onSearch = async (val = '') => {
    const res = await myAxios.get("/team/list",{
        params: {
            searchText:val,
        }
    });
    if(res?.code === 0) {
        teamList.value = res.data;
    }else {
        showFailToast("加载队伍失败，请刷新")
    }
}
// 页面加载时触发一次 查询队伍
onMounted(async()=> {
    const res = await myAxios.get("/team/list");
    if(res?.code === 0) {
        teamList.value = res.data;
    }else {
        showFailToast("加载队伍失败，请刷新")
    }
})
</script>

<style scoped>

</style>