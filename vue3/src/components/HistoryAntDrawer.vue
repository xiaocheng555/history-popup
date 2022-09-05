<template>
  <a-drawer
    v-model:visible="dialogVisible"
    :width="size">
    <slot slot="title" name="title"></slot>
    <slot></slot>
  </a-drawer>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import useHistoryPopup from './useHistoryPopup'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: '50%'
  },
  // 路由记录
  history: {
    type: Object
  },
  // 配置了history后，初次渲染时，如果有url上有history参数，则自动打开弹窗
  auto: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(
  ['update:modelValue']
)

const dialogVisible = computed<boolean>({ // 控制弹窗显示
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  }
})

useHistoryPopup({
  history: computed(() => props.history),
  auto: props.auto,
  dialogVisible: dialogVisible
})
</script>

<style lang='less'>

</style>