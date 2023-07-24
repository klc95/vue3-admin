import { defineStore } from 'pinia'
import { Names } from '../store-namespace'
import type {
  LoginFormData,
  LoginResponseData,
  UserInfoResponseData
} from '@/api/user/type'
import { reqLogin, reqUserInfo } from '@/api/user'

export const useUserStore = defineStore(Names.User, {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN')
    }
  },
  getters: {},
  actions: {
    async userLogin(data: LoginFormData) {
      let result = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data.token
        localStorage.setItem('TOKEN', result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    }
  }
})
