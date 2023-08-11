<template>
  <div class="box">
    <img src="../../assets/images/error_images/404.png" alt="" @click="goHome"/>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
let $router = useRouter()
const goHome = () => {
  $router.push('/home')
}
</script>

<style scoped lang="scss">
.box {
  width: 100vw;
  height: 100vh;
  background: #2a314e;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 1000px;
    height: 400px;
  }
}
</style>
