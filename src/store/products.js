export default {
    namespaced: true,
    state() {
        return {
            productsList: [],
            filteredProductList: []
        }
    },
    mutations: {
        setProductsToState: (state, result) => {
            state.productsList = result;
            state.filteredProductList = result;
        },

        setFilteredProductsToState: (state, filteredProductList) => {
            state.filteredProductList = filteredProductList;
            console.log(state.filteredProductList);
        }
    },
    actions: {
        getJson({commit}, url){
            return fetch(url)
                .then(result => result.json())
                .then(result => {
                    commit('setProductsToState', result);
                })
                .catch(error => {
                    console.log(error)
                })
        },

        filter({commit, state}, userSearch){
            let regexp = new RegExp(userSearch, 'i');
            let filteredProductList = state.productsList.filter(el => regexp.test(el.product_name));
            commit('setFilteredProductsToState', filteredProductList);
        },
        
    },
    getters: {
        filteredProducts(state) {
            return state.filteredProductList
        }
    }
}