<template>
  <div class="main">
    <Sidebar/>
    <Panel/>
  </div>
</template>
<script setup>
import Sidebar from "@view/layout/Sidebar.vue";
import Panel from "@view/layout/Panel.vue";
</script>
<style scoped>
.main {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 40px);
  overflow: hidden;
}
</style>
