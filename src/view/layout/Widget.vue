<template>
  <component :is="Widget[mySidebarName]"/>
</template>
<script setup>
import TableData from "@view/widget/TableData.vue";
//
import {ref, computed} from 'vue'
import {useSidebarStore} from "@store/modules/sidebar.js";
//
const sidebarStore = useSidebarStore();
const mySidebarName = computed(() => sidebarStore.mySidebarName);
const Widget = ref(
    {
      'tableData': TableData
    }
);

</script>


<style scoped>

</style>
