<template>
  <MonacoEditor language="json" :value="tableData" @update:value="updateData"/>
</template>
<script setup>
import MonacoEditor from '@components/monaco/index.vue';
//
import {computed} from 'vue'
//
import {useTableStore} from "@store/modules/table.js";

const tableStore = useTableStore();
//
const tableData = computed(() => JSON.stringify(tableStore.tableData, null, 2));
//
const updateData = (value) => {
  tableStore.setTableData(value);
}
</script>
<style scoped>

</style>
