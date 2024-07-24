<template>
  <div class="editor" ref="editorRef"></div>
</template>
<script setup>
import {ref, watch, onMounted, onBeforeUnmount} from 'vue';
import lodash from 'lodash';
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

// 提取防抖函数到外部变量,避免每次渲染都创建新的防抖函数
const debouncedUpdate = lodash.debounce((editorInstance = {}, emits) => {
  emits('update:value', editorInstance.getValue());
}, 500);

//
onMounted(() => {
  editorInstance = monaco.editor.create(editorRef.value, {
    value: props.value,
    language: props.language || 'javascript',
  });
  editorInstance.onDidChangeModelContent(() => {
    debouncedUpdate(editorInstance, emits);
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
