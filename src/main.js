import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

const tab = ['/index', '/find', '/message', '/mine']
// 设置路由
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    // 跳转前判断是否需要登录
    if(tab.indexOf(to.path) != -1) {
        store.dispatch('device/setIsTab', true)
    } else {
        store.dispatch('device/setIsTab', false)
    }
    next()
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app')
