<template>
  <MonacoEditor language="json" :value="''" @update:value="updateOption"/>
</template>
<script setup>
import MonacoEditor from '@components/monaco/index.vue';

//
const updateOption = (value) => {
  console.log(value);
}
</script>
<style scoped>

</style>
