<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img src="../../../assets/images/past.jpeg" alt="" />
  <el-dropdown>
    <span class="el-dropdown-link">
      Joe
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import useLayOutSettingStore from '@/store/modules/setting'

let LayOutSettingStore = useLayOutSettingStore()
const updateRefresh = () => {
  LayOutSettingStore.refresh = !LayOutSettingStore.refresh
}

const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>
<style scoped>
img {
  width: 24px;
  height: 24px;
  margin: 0 12px;
  border-radius: 50%;
}
</style>
