export default {
    namespaced: true,
    state() {
        return {
            cartList: [],
        }
    },
    mutations: {
        setProductsToCart: (state, result) => {
            state.cartList = result;
        },
    },
    actions: {
        getJson({commit}, url){
            return fetch(url)
                .then(result => result.json())
                .then(result => {
                    commit('setProductsToCart', result.contents);
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
        getters: {
            cartItems(state) {
                return state.cartList
        }
    }
}