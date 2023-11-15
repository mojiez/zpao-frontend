<template>
<form action="/">
  <van-search
    v-model="searchText"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>

<van-divider content-position="left">已选标签</van-divider>
<!-- 美化标签的间隔样式 -->

<div v-if="activeIds.length===0">请选择标签</div>
<van-row gutter="20">
    <van-col span="1" v-for="tag in activeIds">
    <van-tag :show="isTagVisiable" closeable size="medium" type="primary" @close="close(tag)">
    {{tag}}
    </van-tag>
    </van-col>
    
</van-row>


<van-divider content-position="left">选择标签</van-divider>

<van-tree-select
  v-model:active-id="activeIds"
  v-model:main-active-index="activeIndex"
  :items="tagList"
/>

</template>

<script setup>
    import {ref} from 'vue';
    // ref用于声明响应式对象 响应式对象的value发生改变后，与之相关的视图会自动更新
    import {showToast} from 'vant/lib/vant.es';
    
    const value = ref('');
    const searchText = ref('');
    const onClickButton = () => showToast(value.value);
    
    const close = (tag) => {
        showToast('关闭标签!');
        activeIds.value = activeIds.value.filter(item => {
            return item!=tag;
        })
    }
    const isTagVisiable = true;
    const activeId = ref([1, 2]);
    // 已经选中的标签
    const activeIds = ref([]);
    const activeIndex = ref(0);
    const items = [
      {
        text: '浙江',
        children: [
          { text: '杭州', id: 1 },
          { text: '温州', id: 2 },
          { text: '宁波', id: 3, disabled: true },
        ],
      },
      {
        text: '江苏',
        children: [
          { text: '南京', id: 4 },
          { text: '无锡', id: 5 },
          { text: '徐州', id: 6 },
        ],
      },
      { 
        text: '福建', 
        children: [
            {text: 'hujian', id: 7},
        ]
      },
    ];
    const tagList = ref(items);
    const onSearch = () => {
        showToast(searchText.value);
        // 过滤筛选标签
        // 原理就是当调用这个搜索时，现实一个新的item
        tagList.value = items.map(parentTag => {
            // 展开运算 得到临时的孩子数组
            const tempChildren = [...parentTag.children]; 
            const tempParentTag = {...parentTag};

            // parentTag.children = tempChildren.filter(item => {
            //     item.text.includes(searchText)
            // })

            // TODO filter函数
            tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
            return tempParentTag;
        })
    };
    const onCancel = () => {
        showToast('取消！');
        searchText.value = '';
        tagList.value = items;
    };

</script>

<style scoped>

</style>