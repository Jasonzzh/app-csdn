import Vue from 'vue'
import Vuex from 'vuex'
import device from './modules/device'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        device,
        user,
    }
})

export default store