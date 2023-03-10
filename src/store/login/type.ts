export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IUserInfo<> {
  code: number
}
export interface IDataType<T = any> {
  code: number
  data: T
}
