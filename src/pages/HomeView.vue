<template>
  <div class="home">
        <header-comp ref="headercomp"></header-comp>
        <posterComp></posterComp>
        <categiries-comp></categiries-comp>
        <services-comp></services-comp>
        <subscribe-comp></subscribe-comp>
        <footer-comp></footer-comp>
  </div>
</template>

<script>
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

export default {
  name: 'HomeView',
  components: {
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
    posterComp
  },
};
</script>
