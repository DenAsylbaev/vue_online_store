export default {
    namespaced: true,
    state() {
        return {
            cartList: [],
        }
    },
    mutations: {
        addItem(state, item) {
            state.cartList = [...state.cartList, item];
        }
    },
    actions: {
        getJson({}, url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        }
    },
}