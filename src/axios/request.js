import axios from 'axios'
// import qs from 'qs'
// import app from '../main.js'
const service = axios.create({
  baseUrl: process.env.BASE_URL,
  timeout: 5000,
  headers: {'x': 1}
})
console.log(process.env.BASE_URL)
service.interceptors.request.use(
  config => {
    console.log(config)
    // app.$vux.loading.show({
    //   text: '数据加载中……'
    // })

    // config.method === 'post' ? config.data = qs.stringify({...config.data}) : config.params = {...config.params}
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    return config
  },
  error => { // 请求错误处理
    // app.$vux.toast.show({
    //   type: 'warn',
    //   text: error
    // })
    Promise.reject(error)
  }
)
// respone拦截器==>对响应做处理
service.interceptors.response.use(
  response => { // 成功请求到数据
    // 这里根据后端提供的数据进行对应的处理
    console.log(response)
    return response.data
  },
  error => { // 响应错误处理
    console.log(JSON.parse(JSON.stringify(error)))
    return Promise.reject(error)
  }
)
export default service
