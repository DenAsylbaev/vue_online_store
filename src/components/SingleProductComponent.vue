<template>
    <div class="products-item">
        <div class="product-item featuredItem">
            <div class="featuredImgWrap">
                <img :src="require('../images/featured/' + product.img_product)" alt="Some img">
                <div class="featuredImgDark">
                    <button class="buy-btn" @click="$emit('add-product', product)">
                        <img src="../images/cart.svg">
                        <span class="addToCartBtn_text">Add to cart</span>
                    </button>
                </div>
            </div>
        </div>

        <router-link v-bind:to="`/product/` + product.id_product" class="featuredData_link">
            <div class="featuredData">
                <div class="featuredName">
                    {{product.product_name}}
                </div>
                <div class="featuredPrice">
                    &#8381 {{product.price}}
                </div>
            </div>
        </router-link>
        
    </div>
</template>

<script>
    export default {
        name: 'product',
        props: {
            product: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>
