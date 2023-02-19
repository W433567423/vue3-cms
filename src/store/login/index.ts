import { Module } from 'vuex'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import LocalCache from '@/utils/cache'
import router from '@/router'

import { IRootState } from '../type'
import { IDataType, ILoginState } from './type'
import { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    },
    loadLocalLogin(state) {
      const token = LocalCache.getCache('token')
      if (token) state.token = token
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) state.userInfo = userInfo
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //登陆获取用户token
      const loginResult: IDataType = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)

      //获取用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      // 获取用户菜单树
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      //跳转首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: any) {
      //TODO 手机号登陆
      alert(payload.num)
    }
  }
}

export default loginModule
