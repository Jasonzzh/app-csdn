const user = {

    namespaced: true,

    state: {
        userInfo: {},
    },

    getters: {

        getUserInfo(state) {
            state.userInfo = JSON.parse(localStorage.getItem('userInfo'))
            return state.userInfo
        }

    },

    mutations: {

        setUserInfo(state, value) {
            state.userInfo = value
            localStorage.setItem('userInfo', JSON.stringify(value))
        }
    },

    actions: {
        
        setUserInfo(context, value) {
            context.commit('setUserInfo', value)
        }
    }
}

export default user