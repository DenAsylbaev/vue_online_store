<template>
    <div>
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

        <div class="featuredData">
                <div class="featuredName">
                    {{product.product_name}}
                </div>
                <div class="featuredPrice">
                    {{product.price}}
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product',
        // props: ['product', 'img'],
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
