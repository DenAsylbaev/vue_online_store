export default {
    namespaced: true,
    state() {
        return {
            productsList: [
            // {
            //     "id_product": 1,
            //     "product_name": "ELLERY X M'O CAPSULE_001",
            //     "price": 1600,
            //     "img_product": "1.jpg"
            //   },
            //   {
            //     "id_product": 2,
            //     "product_name": "ELLERY X M'O CAPSULE_002",
            //     "price": 3000,
            //     "img_product": "2.jpg"
            //   },
            ],
            filteredProductList: [123]
        }
    },
    mutations: {
        setProductsToState: (state, result) => {
            state.productsList = result;
        },

        setFilteredProductsToState: (state, filteredProductList) => {
            state.filteredProductList = filteredProductList;
            console.log(filteredProductList);
        }

        // filter(state, userSearch){
        //     let regexp = new RegExp('001', 'i');
        //     state.filteredProductList = state.productsList.filter(el => regexp.test(el.product_name));
        //     state.filteredProductList = [1, 2, 4];

        //     console.log(state.productsList);
        // }
        
        // .then(data => {
        //     for (let item of data){
        //         item.imgPath = `../images/featured/${item.id_product}.jpg`;
        //         this.$data.products.push(item);
        //         this.$data.filtered.push(item);
        //     }
        // })
    },
    actions: {
        getJson({commit}, url){
            // console.log(url)
            return fetch(url)
                .then(result => result.json())
                .then(result => {
                    commit('setProductsToState', result);
                })

                .catch(error => {
                    console.log(error)
                })
        },

        // filter({commit, state}, userSearch){
            // console.log(userSearch);
            // let regexp = new RegExp('001', 'i');
            // let filteredProductList = state.productsList.filter(el => regexp.test(el.product_name));
            // let filteredProductList = state.productsList;

            // let filteredProductList = '12';
            // commit('setFilteredProductsToState', userSearch);
            // console.log(filteredProductList);
        // }

    },
}