import Vue from 'vue'
import Vuex from 'vuex'
import device from './modules/device'
import user from './modules/user'
import routes from './modules/routes'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        device,
        user,
        routes,
    }
})

export default store