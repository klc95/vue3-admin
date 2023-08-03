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
  <img :src="userStore.avatar" alt="" />
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'

const $router = useRouter()

const $route = useRoute()

const userStore = useUserStore()

const LayOutSettingStore = useLayOutSettingStore()

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

const logout = async () => {
  await userStore.userLogout()
  $router.push({
    path: '/login',
    query: {
      redirect: $route.path
    }
  })
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
