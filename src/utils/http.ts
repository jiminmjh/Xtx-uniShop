import { useMemberStore } from '@/stores'

const baseUrl: string = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
const memberStore = useMemberStore()

// 1.添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 非http拼接地址
    if (options.url.indexOf('http') === -1) {
      options.url = baseUrl + options.url
    }
    // 请求超时
    options.timeout = 6000
    // 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token

    const token = memberStore.profile?.token
    if (token) options.header.Authorization = token
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<data<T>>((resolve, reject) => {
    // 请求成功，返回promise对象
    uni.request({
      ...options,
      success: async (res: UniApp.RequestSuccessCallbackResult) => {
        // 针对不同状态码进行处理
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as data<T>)
        } else if (res.statusCode === 401) {
          // 401错误
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          uni.showToast({
            title: '登录过期，请重新登录',
            icon: 'none',
          })
        } else {
          // 其他错误
          uni.showToast({
            title: (res.data as data<T>).msg || '请求错误',
            icon: 'none',
          })
        }
      },
      fail(err) {
        uni.showToast({
          title: '网络错误,请稍等再尝试',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}
