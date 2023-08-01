<template>
  <div class="layout_container">
    <div class="slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="tabbar">
      <div class="head_portrait"></div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background: $base-menu-background;
  .slider {
    width: $base-menu-width;
    height: 100vh;
    // background: skyblue;
    .scrollbar {
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
                border-right: none;
           }
    }
  }
  .tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: $base-tabbar-background;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    display: flex;
    align-items: center;
    .head_portrait {
      width: calc($base-tabbar-height - 10px);
      height: calc($base-tabbar-height - 10px);
      border: 1px solid black;
      border-radius: 50%;
      position: fixed;
      right: 15px;
    }
  }
  .main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background: $base-main-background;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: 20px;
    overflow: hidden;
  }
}
</style>
