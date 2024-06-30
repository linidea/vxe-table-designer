<template>
  <a :href="href" :target="target" @click="handleClick">
    <img alt="icon" :src="IconMap[name]" :style="`width:${size}px;height:${size}px`"/>
  </a>
</template>
<script setup>
import IconMap from './IconMap.js'

const props = defineProps({
  href: {
    type: String,
    default: 'javascript:void(0);'
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
  emit('click')
}
</script>
<style scoped>

</style>
