<template>
  <div>
    <h2>Demo</h2>
    <el-table
      v-loading="loading"
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="详情">
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="{row}">
          <el-link type="primary" @click="onEdit(row)">详情</el-link>
        </template>
      </el-table-column>
    </el-table>
    
    <HistoryDrawer 
      v-model="visible" 
      :title="curItem?.name" 
      :history="{ id: curItem?.id }"
      :auto="false"
      @auto-open="initDrawer">
      id：{{curItem?.id}} <br><br>
      姓名：{{curItem?.name}} <br><br>
      详情：{{curItem?.desc}} <br><br>
      
      <br><br>
      <el-button type="primary" @click="refresh">刷新页面</el-button>&nbsp;&nbsp;
      <router-link to="/A"><el-button type="success">跳转页面</el-button></router-link>
    </HistoryDrawer>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import HistoryDrawer from '../components/HistoryDrawer.vue'

interface Item {
  id?: number,
  name?: string,
  desc?: string
}

const route = useRoute()
const list = ref<Item[]>([])
const curItem = ref<Item>()
const visible = ref(false)
const loading = ref(false)
const id = computed(() => route.query.id)

function fetchList () {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    list.value = [
      {
        id: 1,
        name: '张三',
        desc: '打球很厉害'
      },
      {
        id: 2,
        name: '李四',
        desc: '唱歌很厉害'
      }
    ]
    initDrawer()
  }, 1000)
}

function initDrawer () {
  // 手动打开弹窗
  if (id.value) {
    curItem.value = list.value.find(item => String(item.id) === String(id.value))
    visible.value = true
  }
}

function onEdit (row: Item) {
  curItem.value = row
  visible.value = true
}

function refresh () {
  window.location.reload()
}

onBeforeMount(() => {
  fetchList()
})
</script>

<style lang='less' scoped>
</style> 