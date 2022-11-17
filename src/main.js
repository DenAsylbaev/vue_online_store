import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './css/style.css';
import './css/normalize.css';


Vue.config.productionTip = false;
Vue.config.devtools = true;

// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


new Vue({
  router,
  store,
  render: (h) => h(App),


  data: {
    userSearch: '',
  },
  
  methods: {
    getJson(url){
        return fetch(url)
            .then(result => result.json())
            .catch(error => {
                console.log(error)
                // this.$refs.error.text = error;
            })
    },
    postJson(url, data){
        return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(result => result.json())
            .catch(error => {
                console.log(error)
                // this.$refs.error.text = error;
            })
    },
    putJson(url, data){
        return fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(result => result.json())
            .catch(error => {
                // console.log(error)
                this.$refs.error.text = error;
            })
    },

    delJson(url){
        return fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify(data)
        })
            .then(result => result.json())
            .catch(error => {
                // console.log(error)
                this.$refs.error.text = error;
            })
    },

},
mounted() {
}
}).$mount('#app');
