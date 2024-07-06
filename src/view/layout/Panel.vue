<template>
  <div class="panel">
    <div class="left" :style="{width:leftPanelWidth + 'px'}">left</div>
    <div class="divider" @mousedown="startDragging"></div>
    <div class="right">right</div>
  </div>
</template>
<script setup>
import {ref} from 'vue'

const isDragging = ref(false);
const minWidth = 300;
let leftPanelWidth = ref(500);
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
  if (newWidth>1000) newWidth = 1000;
  leftPanelWidth.value = Math.max(newWidth, minWidth); // 确保新宽度不小于最小宽度
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
  width: 8px;
  cursor: col-resize;
  background-color: #dddddd;
}

.left {
  background: moccasin;
}

.right {
  background: #f0f0f0;
  flex-grow: 1;
}
</style>
