import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './css/style.css';
import './css/normalize.css';


Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: (h) => h(App),


  data: {
    userSearch: '',
  },
  
  methods: {
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
                this.$refs.error.text = error;
            })
    },

    delJson(url){
        return fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(result => result.json())
            .catch(error => {
                this.$refs.error.text = error;
            })
    },

},
mounted() {
}
}).$mount('#app');

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> */}

