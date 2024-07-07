<template>
  <div class="panel">
    <div :style="{width:leftPanelWidth + 'px'}"></div>
    <div class="divider" @mousedown="startDragging"></div>
    <div class="right">
      <Preview/>
    </div>
  </div>
</template>
<script setup>
import Preview from "@view/preview/index.vue";
//
import {ref} from 'vue'

const isDragging = ref(false);
let leftPanelWidth = ref(500);
const maxLeftPanelWidth = 1200;
const minLeftPanelWidth = 200;
let startX = 0;
let startWidth = 0;

// 鼠标按下事件
const startDragging = (e) => {
  isDragging.value = true;
  startX = e.clientX;
  startWidth = leftPanelWidth.value;
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
}
// 鼠标抬起事件
const handleMouseUp = () => {
  isDragging.value = false;
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}
// 鼠标移动事件
const handleMouseMove = (e) => {
  if (!isDragging.value) return;
  const deltaX = e.clientX - startX;
  let newWidth = startWidth + deltaX;
  if (newWidth > maxLeftPanelWidth) newWidth = maxLeftPanelWidth;
  if (newWidth < minLeftPanelWidth) newWidth = minLeftPanelWidth;
  leftPanelWidth.value = newWidth;
}
</script>
<style scoped>
.panel {
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  width: calc(100% - 50px);
}

.divider {
  position: relative;
  width: 10px;
  cursor: col-resize;
  background-color: #f3f3f3;
}

.right {
  background: #f3f3f3;
  flex-grow: 1;
  padding: 10px 10px 10px 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
