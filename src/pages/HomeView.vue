<template>
  <div class="home">
    <!-- <SubscribeComponent></SubscribeComponent> -->
        <header-comp ref="headercomp"></header-comp>
        <crumbs-comp></crumbs-comp>
        <!-- <items-filter-comp></items-filter-comp> -->

        <posterComp></posterComp>

        <categiries-comp></categiries-comp>

        
        <div class="featured container">
            <h2 class="featuredHeader">Fetured Items</h2>
            <div class="featuredTitle">Shop for items based on what we featured in this week</div>
            <products ref="products"></products>
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
    posterComp
  },
};
</script>
