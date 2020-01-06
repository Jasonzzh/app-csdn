const device = {
    
    namespaced: true,

    state: {
        isIphoneX: false,
        onTab: 'home',
        isTab: true,
    },

    getters: {
        
        getIsIphoneX(state) {
            state.isIphoneX = localStorage.getItem('isIphoneX')
            return state.isIphoneX
        },

        getOnTab(state) {
            state.onTab = localStorage.getItem('onTab') || 'home'
            return state.onTab
        }
    },

    mutations: {

        setOnTab(state, value) {
            state.onTab = value
            localStorage.setItem('onTab', value)
        },

        setIsTab(state, value) {
            state.isTab = value
        }
    },
    
    actions: {

        setOnTab(context, value) {
            context.commit('setOnTab', value)
        },

        setIsTab(context, value) {
            context.commit('setIsTab', value)
        }
    }
}

export default device