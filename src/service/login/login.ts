import { IDataType, ILoginResult } from '@/store/login/type'
import tuRequest from '..'
import { IAccount } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return tuRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return tuRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
export function requestUserMenusByRoleId(id: number) {
  return tuRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menus',
    showLoading: false
  })
}
