<template>
  <div class="preview">
    <vxe-table
        :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import {useTableStore} from "@store/modules/table.js";

//
const tableStore = useTableStore();
const tableData = ref(tableStore.tableData);

</script>


<style scoped>
.preview {
  box-sizing: border-box;
  border-radius: 8px;
  background: #ffffff;
  height: 100%;
  padding: 10px;
  overflow: auto;
}
</style>
