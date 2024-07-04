<template>
  <div class="sidebar">
    <el-tooltip
        effect="dark"
        placement="right"
        v-for="item in sidebarData"
        :key="item.icon"
        :content="item.intro"
    >
      <Icon class="icon" :name="item.icon"/>
    </el-tooltip>
  </div>
</template>
<script setup>
import {ref} from "vue";
import Icon from "@c/icon/index.vue";

// 定义数据 关于侧边栏的数据 侧边栏的数据是一个数组 里面包含了每一个侧边栏的数据 侧边栏的数据包含了侧边栏的图标和侧边栏的名称 介绍等
const sidebarData = ref([
  {
    icon: "grid",
    name: "表格",
    intro: "基础配置",
  },
  {
    icon: "puzzle",
    name: "组件",
    intro: "列项配置",
  },
]);


</script>
<style scoped>
.sidebar {
  box-sizing: border-box;
  width: 60px;
  height: 100%;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  padding: 8px;
  border-radius: 8px;
}

.icon:hover {
  background: #f0f0f0;
}
</style>
