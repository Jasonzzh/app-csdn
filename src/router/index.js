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
                { path: 'questionDetails', name: 'questionDetails', component: pages.questionDetails }
            ]
        }
    ]
})

export default router