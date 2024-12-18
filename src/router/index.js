import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index';  // import the store

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		beforeEnter: async (to, from, next) => {
			await store.dispatch("getItems", { type: "categories", params: null });
			next();
		}
	},
	{
		path: '/category',
		name: 'Category',
		component: () => import("@/views/Category.vue"),
		beforeEnter: async (to, from, next) => {
			await store.dispatch("getItems", { type: "categories", params: null });
			next();
		}
	},

	{
		path: '/authors',
		name: 'Authors',
		component: () => import("@/views/Authors.vue"),
		beforeEnter: async (to, from, next) => {
			await store.dispatch("getItems", { type: "categories", params: null });
			next();
		}
	},

	{
		path: '/:slug',
		name: 'Detail',
		component: () => import("@/views/Detail.vue"),
		beforeEnter: async (to, from, next) => {
			try {
				await store.dispatch("getItems", { type: "categories", params: null });
				// to.isReady = false;  // Set the route as ready
				const slug = to.params.slug; // Get slug dynamically from the URL
				await store.dispatch('getPostBySlug', slug);  // fetch authentication data from API
				next();
			} catch (error) {
				console.error('Error fetching post:', error);
				next(false); // Prevent navigation if there's an error
			}
		}
	},
	// {
	// 	path: '/login',
	// 	name: 'Login',
	// 	component: () => import("@/views/Login.vue"),
	// }
]


const router = new VueRouter({
	mode: 'history', // Enable history mode to remove hash

	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	}
})

export default router
