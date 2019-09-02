import Axios from 'axios'

/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * 
 */

//配置项
let axios = Axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? '/api/' : '/',
    withCredentials: true
});

// 添加请求拦截器
axios.interceptors.request.use( (config) =>{
    // 在发送请求之前做些什么
    return config;
}, (error) =>{
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use( (response) =>{
    // 对响应数据做点什么
    return response;
}, (error) =>{
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'
                break;
            case 401:
                error.message = '未授权，请重新登录'
                break;
            case 403:
                error.message = '拒绝访问'
                break;
            case 404:
                error.message = '请求错误,未找到该资源'
                break;
            case 405:
                error.message = '请求方法未允许'
                break;
            case 408:
                error.message = '请求超时'
                break;
            case 500:
                error.message = '服务器端出错'
                break;
            case 501:
                error.message = '网络未实现'
                break;
            case 502:
                error.message = '网络错误'
                break;
            case 503:
                error.message = '服务不可用'
                break;
            case 504:
                error.message = '网络超时'
                break;
            case 505:
                error.message = 'http版本不支持该请求'
                break;
            default:
            error.message = `连接错误${error.response.status}`
        }
      } else {
        error.message = "连接到服务器失败"
      }
    // 对响应错误做点什么
    return Promise.reject(error.message);
    // return Promise.reject(error);

});

export default axios;
