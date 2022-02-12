import axios from 'axios'
import { Message } from 'element-ui'
import { getCookie, removeCookie } from '../tools/cookie'

// 环境的切换  开发环境、测试环境和生产环境
// if (process.env.NODE_ENV === "development") {
//   axios.defaults.baseURL = "//api.clowned.cn/api";
// } else if (process.env.NODE_ENV === "debug") {
//   axios.defaults.baseURL = "//api.clowned.cn/api";
// } else if (process.env.NODE_ENV === "production") {
//   axios.defaults.baseURL = "//api.clowned.cn/api";
// }
// 设置默认的请求超时时间。例如超过了10s，就会告知用户当前请求超时，请刷新等。
// axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data'

//http request 拦截器
axios.interceptors.request.use(
  config => {
    //请求携带token
    const token = getCookie('token') || ''
    token && (config.headers.token = token)
    return config
  },
  error => {
    return Promise.reject(err)
  }
)

//http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errCode == 2) {
      router.push({
        path: '/login',
        querry: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
      })
    }
    return response
  },
  err => {
    // 返回接口返回的错误信息
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误(400)'
          break
        case 401:
          this.$router.push('/login')
          break
        case 403:
          err.message = '拒绝访问(403)'
          break
        case 404:
          err.message = '请求出错(404)'
          break
        case 408:
          err.message = '请求超时(408)'
          break
        case 500:
          err.message = '服务器错误(500)'
          break
        case 501:
          err.message = '服务未实现(501)'
          break
        case 502:
          err.message = '网络错误(502)'
          break
        case 503:
          err.message = '服务不可用(503)'
          break
        case 504:
          err.message = '网络超时(504)'
          break
        case 505:
          err.message = 'HTTP版本不受支持(505)'
          break
        default:
          err.message = `连接出错(${err.response.status})!`
      }
    } else {
      err.message = '连接服务器失败!'
    }
    Message.error(err.message)
    return Promise.reject(err)
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
