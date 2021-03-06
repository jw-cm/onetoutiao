// 引入axios
import axios from "axios"
// 配置公共的 ulr
// process.env.VUE_APP_URL 如过是运行 npm run serve 是从.env.development 文件中获取
axios.defaults.baseURL = process.env.VUE_APP_URL

// 配置一个请求的拦截器
axios.interceptors.request.use(function(config){
    // oauth_token:"KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS"
    let data = config.data || {}  //get 请求时没有data 防御性代码
    data["oauth_token"] = "KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS" // 在登录的情况下是存在的  如果没有登录是不存在的
    config.data = data
    
    console.log(config)
    return config
},function(error){
    return Promise.reject(error)
})

// 响应的拦截器
axios.interceptors.response.use(function(response){
    // 返回数据中的 data
    return response.data
},function(error){
    return Promise.reject(error)
})

// 导出定义的axios
export default axios

