<template>
    <div id="teamAddPage">
    <van-form @submit="onSubmit">
        <van-cell-group inset>
        <van-field
        v-model="addTeamData.name "
        name="name"
        label="队伍名称"
        placeholder="请输入队伍名称"
        :rules="[{ required: true, message: '请输入队伍名称' }]"
        />
        <van-field
            v-model="addTeamData.description"
            rows="2"
            autosize
            label="留言"
            type="textarea"
            placeholder="请输入留言"
        />
        <van-field
        v-model="addTeamData.expireTime"
        is-link
        readonly
        name="calendar"
        label="过期时间"
        :placeholder="addTeamData.expireTime ?? '点击选择过期时间'"
        @click="showCalendar = true"
        />
        <van-calendar v-model:show="showCalendar" @confirm="onConfirm" />
        <van-field name="stepper" label="队伍最大人数">
        <template #input>
            <van-stepper v-model="addTeamData.maxNum" max="10" min="2"/>
        </template>
        </van-field>
        <van-field name="radio" label="队伍状态">
        <template #input>
            <van-radio-group v-model="addTeamData.status" direction="horizontal">
            <van-radio name="0">公开</van-radio>
            <van-radio name="1">私有</van-radio>
            <van-radio name="2">加密</van-radio>
            </van-radio-group>
        </template>
        </van-field>

        <!-- 只有状态为加密时 才允许输入密码 -->
        <van-field
        v-if="Number(addTeamData.status) === 2"
        v-model="addTeamData.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入队伍密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        />
    </van-cell-group>
    <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
        提交
        </van-button>
    </div>
    </van-form>
    {{
        addTeamData
    }}
    </div>
</template>

<script setup>
import {ref} from 'vue';
const initFormData = {
  "description": "",
  "expireTime": null,
  "maxNum": 3,
  "name": "",
  "password": "",
  "status": 0,
  "userId": 0
}; 

// 创建队伍页，看创建队伍需要填写哪些信息


// 封装一个由用户填写的表单对象
const addTeamData = ref({...initFormData});
// 1. const常量 在声明后不能被修改
// 2. ref 更新时相关的UI会自动更新

const router = useRouter();
const count = ref(1);
const showCalendar = ref(false);
const result = ref('');
const onConfirm = (date) => {
    //   addTeamData.value.expireTime = `${date.getMonth() + 1}/${date.getDate()}`;
    //   addTeamData.value.expireTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 
    const date1 = new Date(date);
    const year = date1.getFullYear();
    const month = ('0' + (date1.getMonth() + 1)).slice(-2);
    const day = ('0' + date1.getDate()).slice(-2);
    const hour = ('0' + date1.getHours()).slice(-2);
    const minute = ('0' + date1.getMinutes()).slice(-2);
    const second = ('0' + date1.getSeconds()).slice(-2);
    const formattedDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    addTeamData.value.expireTime = formattedDate;  
    showCalendar.value = false;
    };
import {useRouter} from "vue-router";
import myAxios from '../plugins/myAxios';
import {showToast,showFailToast,showSuccessToast} from 'vant/lib/vant.es';
const onSubmit = async() => {
    const postData = {
        ...addTeamData.value,
        status:Number(addTeamData.value.status),
    }
    const res = await myAxios.post("/team/addteam",postData);
    if(res?.code === 0 && res.data) {
        showSuccessToast('添加队伍成功');
        router.push({
            path:'team',
            replace:true,
        })
    }else {
        showFailToast('添加队伍失败');
    }
    // TODO 前段参数校验
}
</script>

<style scoped>

</style>