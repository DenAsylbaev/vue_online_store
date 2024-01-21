<template>
    <div class="header">
            <div class="page-header-wrp-flex">
                <div class="leftHeader">
                    <img class="leftHeader-img" src="../images/logo.png" alt="">
                    <filterEl></filterEl>
                </div>
                <menuNavigation></menuNavigation>
                <div class="page-header-btn-wrp">
                    <menuEl></menuEl>
                    <cart ref="cart"></cart>   
                </div>
            </div>
    <error ref="error"></error>
    </div>
</template>

<script>
import cart from './CartComponent.vue'
import filterEl from './FilterComp.vue'
import error from './ErrorComp.vue'
import menuEl from './MenuComponent.vue'
import menuNavigation from './MenuNavigationComponent.vue'
    export default {
        name: 'headerComp',
        components: {
            cart,
            error,
            filterEl,
            menuEl,
            menuNavigation
        }
    }
</script>