<template>
  <div
      id="teamCardList"
  >
  <van-card
      v-for="team in props.teamList"
      :desc="team.description"
      thumb="https://th.bing.com/th/id/OIP.jfY4nQPLuqb-gEi62_zobgAAAA?rs=1&pid=ImgDetMain"
      :title="`${team.name} `"
  >
    <template #tags>
      <van-tag plain type="danger" style="margin-right: 8px; margin-top: 8px" >
        {{
          teamStatusEnum[team.status]
        }}
      </van-tag>
    </template>
    <template #bottom>
      <div>
        {{'最大人数' + team.maxNum}}
      </div>
      <div>
        {{'过期时间' + team.expireTime}}
      </div>
      <div>
        {{'创建时间' + team.createTime}}
      </div>
    </template>
    <template #footer>
      <van-button size="mini" plain type="primary" @click="doJoinTeam(team.id)">加入队伍</van-button>
    </template>
  </van-card>
  </div>
</template>

<script setup lang="ts">

import myAxios from "../plugins/myAxios";
import {showToast,showFailToast,showSuccessToast} from 'vant/lib/vant.es';
import {teamStatusEnum} from "../constants/team";
interface TeamCardListProps{
  teamList: TeamType[];
}
const props = withDefaults(defineProps<TeamCardListProps>(),{
  //@ts-ignore
  teamList: [] as TeamType[],
});

//队伍列表加入队伍
const doJoinTeam = async(id: number) =>{
  const res = await myAxios.post("/team/join",{
    id : id,
  });
  if (res?.code === 0){
    // Toast.success("加入成功")
    showSuccessToast("加入成功")
  }else {
    // Toast.fail("加入失败" + (res.description ? `， ${res.description} `:''));
    showFailToast("加入失败" + (res.description? `,${res.description}`:""))
  }
}
</script>

<style scoped>
#teamCardList :deep(.van-image__img){
  height: 128px;
  object-fit: unset;
}
</style>