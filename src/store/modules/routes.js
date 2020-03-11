const routes = {

    namespaced: true,

    state: {
        routes: ['index']
    },

    getters: {

        getRoutes(state) {
            return state.routes
        }

    },

    mutations: {

        addRoutes(state, value) {
            state.routes.push(value)
        },

        deleteRoutes(state) {
            state.routes.pop()
            if(state.routes.length == 0) state.routes.push('index')
        }

    },

    actions: {

        addRoutes(context, value) {
            context.commit('addRoutes', value)
        },

        deleteRoutes(context) {
            context.commit('deleteRoutes')
        }

    }
}

export default routes