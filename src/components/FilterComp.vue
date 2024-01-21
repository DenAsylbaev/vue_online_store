<template>
    <form action="#" class="search-form" @submit.prevent="filterSearch(userSearch)">
        <input type="text" class="search-icon-form" v-model="userSearch" id="search">
            <label for="search">
                <img src="../images/search.png" alt="search">
            </label>
    </form>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';

    export default {
        name: 'filterEl',
        data() {
            return {
                userSearch: ''
            }
        },
        mounted() {
        },
        methods: {
            ...mapActions('products', ['filter']),

            filterSearch(userSearch) {
                this.filter(userSearch);
            },
        }
    }
</script>
