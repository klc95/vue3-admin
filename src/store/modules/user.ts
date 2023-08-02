import { defineStore } from 'pinia'
import { Names } from '../store-namespace'
import type {
  LoginFormData,
  LoginResponseData,
  UserInfoResponseData
} from '@/api/user/type'
import type { UserState } from '../types/type'
import { reqLogin, reqUserInfo } from '@/api/user'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'
 const useUserStore = defineStore(Names.UserStore, {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute
    }
  },
  getters: {},
  actions: {
    async userLogin(data: LoginFormData) {
      let result: LoginResponseData = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    }
  }
})
export default useUserStore