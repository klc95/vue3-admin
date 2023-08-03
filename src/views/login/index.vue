<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <div class="login_title">Vue3-Admin</div>
          <el-form-item prop="username">
            <el-input
              placeholder="请输入账号"
              :prefix-icon="User"
              clearable
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
              @click="login"
              :loading="loading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import { getTime } from '@/utils/time'
import { validatorPassword, validatorUsername } from '@/utils/validate'
import { Lock, User } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const userStore = useUserStore()

const loginForm = reactive({ username: 'admin', password: '111111' })

let loading = ref(false)

const $router = useRouter()

const $route = useRoute()

let loginFormRef = ref()

const login = async () => {
  await loginFormRef.value.validate()

  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    let redirect: any = $route.query.redirect
    $router.push({ path: redirect || '/' })
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}好`
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: error.message
    })
  }
}

const rules = reactive({
  username: [{ trigger: 'change', validator: validatorUsername }],
  password: [{ trigger: 'change', validator: validatorPassword }]
})
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/images/background.jpg');
  background-size: cover;
  .login_form {
    position: relative;
    width: 60%;
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
@/store/modules/user
