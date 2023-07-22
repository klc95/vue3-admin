<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
const loginForm = reactive({ username: 'admin', password: '111111' })
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <div class="login_title">Vue3-Admin</div>
          <el-form-item>
            <el-input 
              placeholder="请输入账号" 
              :prefix-icon="User" 
              clearable 
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input 
              placeholder="请输入密码" 
              :prefix-icon="Lock" 
              clearable 
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button 
              type="primary"
              class="login_btn"
              size="default"
            >
            登录
          </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>

<style scoped lang='scss'>
.login_container {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/images/background.jpg');
  background-size: cover;
  .login_form {
    position: relative;
    width: 75%;
    top: 30vh;
    left: 8vw;
    padding: 30px;
    background-image: url('@/assets/images/login_form.png');
    background-size: cover;
    .login_title {
    color: white;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }
    .login_btn {
      width: 100%;
    }
  }
}
 

</style>