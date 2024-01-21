<template>
    <div class="cart-item">
        <div class="product-bio">
            <div class="cart-img-box"> 
                <img :src="require('../images/featured/' + cartItem.img_product)" alt="Some img">
            </div>
            <div class="product-desc">
                <div class="product-title">{{ cartItem.product_name }}</div>
                <div class="product-single-price">Price: <span> $ {{ cartItem.price }} </span></div>
                <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                <div class="product-price">Total price: <span>$ {{cartItem.quantity*cartItem.price}} </span></div>
            </div>
            <div> 
                <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartItem",
        props: ['cartItem'],
    }
</script>