// vuex-persistedstate 持久化state的配置文件
import createPersistedState from 'vuex-persistedstate'

export default {
    /**
     * 持久化存储vuex state配置函数   ！！ vuex state数据被改变时才会触发持久化存储 ！！
     * 
     * @param {String} sessionStorage / localStorage 
     * @param {Array} state  指定 Vuex state里的某几个数据进行持久化储存(传入数据key值的集合即可)
     * @return  vuex-persistedstate配置
     */
    persistedstate(storage = 'localStorage', state = []) {
        return createPersistedState({
            storage: window[storage],
            // 持久化的state,配置如下
            reducer(vuexState) {
                let obj = {}
                state.map(item=>{
                    obj[item] = vuexState[item]
                })
                return obj
           }
        })
    }
     
}