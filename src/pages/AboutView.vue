<template>
  <div class="home">
        <header-comp ref="headercomp"></header-comp>
        <crumbs-comp></crumbs-comp>

        <div class="cart-flex">
          <cart-box-comp></cart-box-comp>
          
        </div>

        <services-comp></services-comp>
        <subscribe-comp></subscribe-comp>
        <footer-comp></footer-comp>
  </div>
</template>

<script>
// @ is an alias to /src
// import SubscribeComponent from '@/components/SubscribeComponent.vue';
import cart from '@/components/CartComponent.vue'
import products from '@/components/ProductComponent.vue'
import filterEl from '@/components/FilterComp.vue'
import error from '@/components/ErrorComp.vue'
import headerComp from '@/components/HeaderComponent.vue'
import crumbsComp from '@/components/CrumbsComponent.vue'
import footerComp from '@/components/FooterComponent.vue'
import servicesComp from '@/components/ServicesComponent.vue'
import subscribeComp from '@/components/SubscribeComponent.vue'
import categiriesComp from '@/components/CategoriesComponent.vue'
import posterComp from '@/components/PosterComponent.vue'
import cartBoxComp from '@/components/CartBoxComponent.vue'

export default {
  name: 'HomeView',
  components: {
    // SubscribeComponent,
    cart,
    products,
    filterEl,
    error,
    headerComp,
    crumbsComp,
    footerComp,
    servicesComp,
    subscribeComp,
    categiriesComp,
    posterComp,
    cartBoxComp
  },
};
</script>
