// 兼容ie polyfill
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
/**
 * 图片懒加载  !! 有时图片不切换时要在 img上加上 :key="" !!
 * 
 * 文档 https://github.com/hilongjw/vue-lazyload
 */
Vue.use(VueLazyload, {
    //加载失败显示的图片
    // error: require('./assets/img/error.png'),
    error: `https://fakeimg.pl/500x500/eeeeee/?text=加载图片失败&font=noto&font_size=30`,
    loading: 'https://img.zcool.cn/community/01114d59941891000000212989593d.gif',
})


/**
 * 挂载公共组件 及全局方法
 */
import commonComponents from '@/components'
Vue.use(commonComponents);
/**
 * 按需引入antd-vue
 */
import './ui/antd-vue-ui'


Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')