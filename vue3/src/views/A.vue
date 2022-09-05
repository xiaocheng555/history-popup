<template>
  <div>
    <h1>过渡页面</h1>
    <el-button type="primary" @click="back">返回</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function back () {
  router.back()
}
</script>

<style lang='less' scoped>
</style>