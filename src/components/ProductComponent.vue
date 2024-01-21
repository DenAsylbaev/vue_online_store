<template>
    <div class="featuredItems">
        <product v-for="item in filteredProducts"
            :key="item.id_product" 
            :img="item.imgPath"
            :product="item"
            @add-product="$parent.$refs.headercomp.$refs.cart.addProduct">
        </product>
    </div>
</template>

<script>

    import product from './SingleProductComponent.vue'
    import { mapActions, mapGetters } from 'vuex';

    export default {
    name: 'ProductComponent',
    components: {
        product
    },
    data() {
        return {
            catalogUrl: '/catalogData.json',
            imgProduct: ''
        }
    },
        mounted() {
            this.getJson(`/apis/products`)
        },
        computed: {
            ...mapGetters('products', ['filteredProducts']),
        },
        methods: {
            ...mapActions('products', ['getJson']),
        }
    }

</script>