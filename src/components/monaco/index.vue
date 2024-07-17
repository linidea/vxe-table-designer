<template>
  <div class="editor" ref="editorRef"></div>
</template>
<script setup>
import {ref, watch, onMounted, onBeforeUnmount} from 'vue';
import * as monaco from 'monaco-editor';
import './worker.js';
//
const props = defineProps({
  language: String,
  value: String,
});
//
const emits = defineEmits(['update:value']);
//
const editorRef = ref(null);
let editorInstance = null;
//
onMounted(() => {
  editorInstance = monaco.editor.create(editorRef.value, {
    value: props.value,
    language: props.language || 'javascript',
  });
  editorInstance.onDidChangeModelContent(() => {
    emits('update:value', editorInstance.getValue());
  });
  addCustomScrollbarStyle(editorInstance);
})
onBeforeUnmount(() => {
  if (editorInstance) editorInstance.dispose();
})
watch(() => props.value, (value) => {
  if (editorInstance && editorInstance.getValue() !== value) {
    editorInstance.setValue(value);
  }
})
// 添加自定义样式到编辑器的 Shadow DOM
const addCustomScrollbarStyle = (editor) => {
  const styleNode = document.createElement('style');
  styleNode.textContent = `
    .monaco-scrollable-element > .scrollbar > .slider {
      background: #cccccc !important;
      border-radius: 20px !important;
    }
    .monaco-scrollable-element > .scrollbar > .slider:hover {
      background: #999999 !important;
    }
  `;
  editor.getDomNode().appendChild(styleNode);
};
</script>

<style scoped>
.editor {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
