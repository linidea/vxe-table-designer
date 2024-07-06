<template>
  <div class="hover" @click="handleClick">
    <img alt="icon" class="icon" :src="IconMap[name]" :style="`width:${size}px;height:${size}px`"/>
  </div>
</template>
<script setup>
import IconMap from './IconMap.js'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_self'
  },
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '24'
  }
})
const emit = defineEmits(['click'])
const handleClick = () => {
  // 如果有href属性 则打开新的页面
  if (props.href) {
    window.open(props.href, props.target)
    return
  }
  emit('click')
}
</script>
<style scoped>
.hover {
  cursor: pointer;
}

.icon {
  display: block;
}
</style>
