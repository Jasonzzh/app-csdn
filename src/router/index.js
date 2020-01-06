import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'

Vue.use(Router)

const router = new Router ({
    routes: [
        {
            path: '/',
            name: 'homeIndex',
            component: pages.homeIndex,
            children: [
                { path: '', redirect: 'index' },
                { path: 'index', component: pages.index },
                { path: 'questionDetails', name: 'questionDetails', component: pages.questionDetails },
                { path: 'writeAnswer', name: 'writeAnswer', component: pages.writeAnswer },
                { path: 'mine', name: 'mine', component: pages.mine },
                { path: 'login', name: 'login', component: pages.login },
                { path: 'find', name: 'find', component: pages.find },
                { path: 'message', name: 'message', component: pages.message },
            ]
        },
    ]
})

export default router