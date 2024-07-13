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
          :class="['icon',mySidebarName === item.name?'icon-hover':'']"
          @click="handleClick(item.name)"
      />
    </el-tooltip>
  </div>
</template>
<script setup>
//
import Icon from "@components/icon/index.vue";
//
import {ref, computed} from "vue";
import {useSidebarStore} from "@store/modules/sidebar.js";
//
import SidebarData from "@config/sidebar/index.js"
//
const sidebarStore = useSidebarStore();
// 定义数据 关于侧边栏的数据 侧边栏的数据是一个数组 里面包含了每一个侧边栏的数据 侧边栏的数据包含了侧边栏的图标和侧边栏的名称 介绍等
const sidebarData = ref(SidebarData);
// 定义计算属性
const mySidebarName = computed(() => sidebarStore.mySidebarName);
// 点击事件
const handleClick = (name) => {
  sidebarStore.setSidebarName(name);
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
