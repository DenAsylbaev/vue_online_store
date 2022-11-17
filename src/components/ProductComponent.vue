<template>
    <div class="featuredItems">
        <product v-for="item of filtered"
            :key="item.id_product" 
            :img="item.imgPath"
            :product="item"
            @add-product="$parent.$refs.headercomp.$refs.cart.addProduct">
        </product>
    </div>
</template>

<script>
    import product from './SingleProductComponent.vue'
    import { mapActions, mapMutations } from 'vuex';

    export default {
    name: 'ProductComponent',
    components: {
        product
    },

    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
            imgProduct: ''
        }
    },
        mounted() {
            this.getJson(`/apis/products`)
                // .then(data => {
                //     for (let item of data){
                //         item.imgPath = `../images/featured/${item.id_product}.jpg`;
                //         this.$data.products.push(item);
                //         this.$data.filtered.push(item);
                //     }
                // });
        },
        methods: {
            ...mapActions('products', ['getJson']),

            // filter(userSearch){
            //     let regexp = new RegExp(userSearch, 'i');
            //     this.filtered = this.products.filter(el => regexp.test(el.product_name));
            // }
        }
    }
</script>