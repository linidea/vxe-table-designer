<template>
  <component :is="Widget[mySidebarName]"/>
</template>
<script setup>
import '@style/widget.css';
import TableOption from "@view/widget/TableOption.vue";
import TableData from "@view/widget/TableData.vue";
//
import {shallowRef, computed} from 'vue'
import {useSidebarStore} from "@store/modules/sidebar.js";
//
const sidebarStore = useSidebarStore();
const mySidebarName = computed(() => sidebarStore.mySidebarName);
// shallowRef 用于创建一个响应式的对象，但是不会对对象的属性进行深层次的响应式处理
const Widget = shallowRef(
    {
      'tableOption': TableOption,
      'tableData': TableData
    }
);

</script>


<style scoped>

</style>
