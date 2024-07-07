<template>
  <div class="sidebar">
    <el-tooltip
        effect="dark"
        placement="right"
        v-for="item in sidebarData"
        :key="item.icon"
        :content="item.intro"
    >
      <Icon
          :name="item.icon"
          :class="['icon',activeName === item.name?'icon-hover':'']"
          @click="handleClick(item.name)"
      />
    </el-tooltip>
  </div>
</template>
<script setup>
import {ref} from "vue";
import {useSidebarStore} from "@store/modules/sidebar.js";
//
import Icon from "@components/icon/index.vue";

// 定义数据 关于侧边栏的数据 侧边栏的数据是一个数组 里面包含了每一个侧边栏的数据 侧边栏的数据包含了侧边栏的图标和侧边栏的名称 介绍等
const sidebarData = ref([
  {
    name: "base",
    icon: "grid",
    intro: "基础配置",
  },
  {
    name: "item",
    icon: "puzzle",
    intro: "列项配置",
  },
  {
    name: "json",
    icon: "json",
    intro: "JSON配置",
  },
  {
    name: "database",
    icon: "database",
    intro: "表格数据"
  }
]);
//
let activeName = ref("base");
const sidebarStore = useSidebarStore();
// 默认选中
sidebarStore.setActiveName(activeName.value);
// 点击事件
const handleClick = (name) => {
  activeName.value = name;
  sidebarStore.setActiveName(name);
};
</script>
<style scoped>
.sidebar {
  box-sizing: border-box;
  padding: 8px 0;
  width: 50px;
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

.icon:hover, .icon-hover {
  background: #f0f0f0;
}
</style>
