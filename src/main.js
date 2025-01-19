import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createHead } from '@unhead/vue'; // Import createHead from @vueuse/head
import store from "./store";
import "./scss/styles.scss";
import api from "./api/index"; // Adjust the path to where api.js is located

const head = createHead();
Vue.prototype.$api = api;

Vue.config.productionTip = false;
new Vue({
	vuetify, router,
	head, store,
	render: h => h(App)
}).$mount('#app')
