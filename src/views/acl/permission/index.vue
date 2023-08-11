<template>
  <div>permission</div>
  <div>
    <el-button v-has="`cuser.detail`">curser.detail</el-button>
    <el-button v-has="`cuser.user`">curser.user</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style scoped lang="scss"></style>
