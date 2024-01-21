<template>
    <section class="order-form">
        <form action="#" method="POST" class="order-form-box">
            <p class="order-form-title">shipping address</p>
            <input type="text" class="input-city" id="city" placeholder="Bangladesh">
            <input type="text" class="input-address" id="state" placeholder="State">
            <input type="text" class="input-address" id="postcode" placeholder="Postcode / Zip">
            <input type="submit" class="order-submit-btn" value ="get a quote">
        </form>
        <div class="subtotal">
            <p class="subtotal-price">Sub total <span class="subtotal-price-value">&#8381 {{ result }}</span></p>
            <p class="total-price">Grand total <span class="total-price-value">&#8381 {{ result }}</span></p>
            <div class="cheeckout-btn-box">
                <button class="cheeckout-btn">Proceed to checkout</button>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default { 
        name: 'orderFormComp',
        computed: {
            ...mapGetters('cart', ['cartItems']),

        result: function() {
                const total = this.cartItems.reduce(function(sum, elem) {
	                    return sum + (elem.quantity * elem.price);
                    }, 0)
                    return total
                }
        },
    }
</script>