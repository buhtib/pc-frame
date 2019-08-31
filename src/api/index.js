import axios from './config'
/**
 * 引入 antd-vue的提示方法
 */
import Message from '@/ui/antd-vue-ui'
// 引入qs模块，用来序列化post类型的数据
import QS from 'qs'; 

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            Message.error(err)
            reject(err.data)
        })
    })
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                Message.error(err)
                reject(err.data)
            })
    });
}

export default {
    get,
    post
}