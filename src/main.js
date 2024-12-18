import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createHead } from '@unhead/vue'; // Import createHead from @vueuse/head
import store from "./store";
import "./scss/styles.scss";

const head = createHead();
Vue.config.productionTip = false

new Vue({
	vuetify, router,
	head, store,
	render: h => h(App)
}).$mount('#app')
