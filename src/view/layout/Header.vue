<template>
  <div class="header">
    <div class="flex">
      <Icon name="vite"/>
      <b class="title"> Vxe Table Designer</b>
    </div>
    <div class="flex">
      <el-dropdown style="margin-right: 10px">
        <Icon name="book"/>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleDropdownItem('vxeTable')">Vxe Table</el-dropdown-item>
            <el-dropdown-item @click="handleDropdownItem('elementPlus')">Element Plus</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <Icon name="github" href="https://github.com/linidea/vxe-table-designer" target="_blank"/>
    </div>
  </div>
</template>
<script setup>
import Icon from "@components/icon/index.vue";

const handleDropdownItem = (name) => {
  if (name === 'vxeTable') {
    window.open('https://vxetable.cn/#/start/install', '_blank')
  } else if (name === 'elementPlus') {
    window.open('https://element-plus.org/zh-CN/', '_blank')
  }
}
</script>
<style scoped>
:deep(.el-dropdown-menu__item:focus-visible) {
  outline: none !important;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}

.title {
  margin-left: 10px;
  font-size: 16px;
  background-image: linear-gradient(to left, hsl(0, 100%, 30%), hsl(39, 100%, 30%), hsl(60, 100%, 30%), hsl(120, 100%, 30%), hsl(240, 100%, 30%), hsl(275, 100%, 30%), hsl(320, 100%, 30%));
  -webkit-background-clip: text;
  color: transparent;
}
</style>
