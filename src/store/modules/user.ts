import { reqLogin, reqUserInfo, reqLogOut } from '@/api/user'
import type { LoginFormData, LoginResponseData } from '@/api/user/type'
import { constantRoute, asyncRoute, anyRoute } from '@/router/routes'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token'
import { defineStore } from 'pinia'
import { Names } from '../store-namespace'
import type { UserState } from '../types/type'
import router from '@/router'
// @ts-ignore
import _ from 'lodash'

function filterAsyncRoute(asyncRoute: any, routes: any) {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

const useUserStore = defineStore(Names.UserStore, {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
      buttons: []
    }
  },
  getters: {},
  actions: {
    async userLogin(data: LoginFormData) {
      const result: LoginResponseData = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    async userInfo() {
      const result = await reqUserInfo()
      console.log(result);
      if (result.code === 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        this.buttons = result.data.checkUser.buttons
        let userAsyncRoute = filterAsyncRoute(_.cloneDeep(asyncRoute), result.data.checkUser.routes)
        this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
        let registerRoute = [...userAsyncRoute, anyRoute]
        registerRoute.forEach((route: any) => {
          router.addRoute(route)
        })
        return 'ok'
      } else {
        return Promise.reject('获取用户信息失败')
      }
    },
    async userLogout() {
      const result = await reqLogOut()
      if (result.code === 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  }
})
export default useUserStore