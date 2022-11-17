
<template>
    <!-- <form action="#" class="search-form" @submit.prevent="$parent.$parent.$refs.products.filter(userSearch)"> -->
    <form action="#" class="search-form" @submit.prevent="filterSearch(userSearch)">
        <input type="text" class="search-icon-form" v-model="userSearch" id="search">
            <label for="search">
                <img src="../images/search.png" alt="search">
            </label>
    </form>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';

// console.log(this.$parent);
    export default {
        name: 'filterEl',
        data() {
            return {
                userSearch: ''
            }
        },
        // methods: {
        //     filterSearch(userSearch) {
        //         this.filter({}, userSearch);
        //     }
        // },

        mounted() {
            // this.filter('001')
            //     .then(data => {
            //         for (let item of data){
            //             item.imgPath = `../images/featured/${item.id_product}.jpg`;
            //             this.$data.products.push(item);
            //             this.$data.filtered.push(item);
            //         }
            //     });
        },
        methods: {
            ...mapMutations('products', ['setFilteredProductsToState']),

            filterSearch(userSearch) {
                this.setFilteredProductsToState(userSearch);
            },


            // filter(userSearch){
            //     let regexp = new RegExp(userSearch, 'i');
            //     this.filtered = this.products.filter(el => regexp.test(el.product_name));
            // }
        }
    }
</script>
