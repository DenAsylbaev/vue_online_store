<template>
    <div class="newArrivals">
        <div class="container">
            <h1 class="page_title">{{ this.title }}</h1>
            <nav>
                <router-link to="/">HOME</router-link>
                <span>/</span>
                <router-link :to="`/` + this.title ">{{ this.title }}</router-link>
            </nav>
        </div>
    </div>   
</template>

<script>
    export default {
        name: 'crumbsComp',

        data() {
            return {
                title: this.$parent.$route.matched[0].name,
            }
        }
    }
    
</script>