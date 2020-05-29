import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'

Vue.use(Router)

const router = new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'homeIndex',
            component: pages.homeIndex,
            children: [
                { path: '', redirect: 'index' },
                { path: 'index', component: pages.index, meta: { title: '前端路上'} },
                { path: 'questionDetails', name: 'questionDetails', component: pages.questionDetails, meta: { title: '博客详情'} },
                { path: 'writeAnswer', name: 'writeAnswer', component: pages.writeAnswer, meta: { title: '写评论', requireAuth: true } },
                { path: 'mine', name: 'mine', component: pages.mine, meta: { title: '我的'} },
                { path: 'login', name: 'login', component: pages.login, meta: { title: '登录'} },
                { path: 'find', name: 'find', component: pages.find, meta: { title: '发现'} },
                { path: 'message', name: 'message', component: pages.message, meta: { title: '消息'} },
            ]
        },
    ]
})

export default router