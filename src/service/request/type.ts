import type { AxiosRequestConfig, AxiosResponse } from 'axios'

<<<<<<< HEAD
export interface TURequestInterceptors<T = AxiosResponse> {
=======
export interface HYRequestInterceptors<T = AxiosResponse> {
>>>>>>> ae2fb9a90e0d4928ef009b88d7b3568f52033c67
  requestInterceptor?: (config: AxiosRequestConfig) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

<<<<<<< HEAD
export interface TURequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: TURequestInterceptors<T>
=======
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
>>>>>>> ae2fb9a90e0d4928ef009b88d7b3568f52033c67
  showLoading?: boolean
}
