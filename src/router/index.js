import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index';  // import the store
// import _helpers from '@/_helpers';
Vue.use(VueRouter)
const hasCategories = (params) => (store.state.categories?.some(cat => cat.params === params)?.items?.length > 0)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		beforeEnter: async (to, from, next) => {
			const params = null;
			if (!hasCategories(params)) await store.dispatch("getItems", { type: "categories", params: params });
			next();
		}
	},
	{
		path: '/categories',
		name: 'Categories',
		component: () => import("@/views/Categories.vue"),
		beforeEnter: async (to, from, next) => {
			try {
				const params = null;
				if (hasCategories(params)) next();
				else await store.dispatch("getItems", { type: "categories", params: null });
				next();
			} catch (error) {
				console.error('Error fetching post:', error);
				next(false); // Prevent navigation if there's an error
			}
		}
	},
	{
		path: '/riddles',
		name: 'Riddles',
		props: true, // Custom function to define props
		component: () => import("@/views/Riddles.vue"),
		beforeEnter: async (to, from, next) => {
			await store.dispatch("getItems", {
				type: "riddle", name: "riddles", params: {
					per_page: 50,
					page: 1,
				}
			});
			next();
		}

	},
	{
		path: '/definition/:slug',
		name: 'Definition',
		props: true, // Custom function to define props
		component: () => import("@/views/Definition.vue"),
		beforeEnter: async (to, from, next) => {
			try {
				const params = null;
				if (!hasCategories(params)) await store.dispatch("getItems", { type: "categories", params: params });
				// to.isReady = false;  // Set the route as ready
				const slug = to.params.slug; // Get slug dynamically from the URL
				await store.dispatch('getDefinitionBySlug', slug);  // fetch authentication data from API
				next();
			} catch (error) {
				console.error('Error fetching post:', error);
				next(false); // Prevent navigation if there's an error
			}
		}
	},
	{
		path: '/category/:slug',
		name: 'category',
		props: true, // Custom function to define props
		component: () => import("@/views/Category.vue"),

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
		path: '/page/:slug',
		name: 'Page',
		props: true,
		component: () => import("@/views/Page.vue"),
		beforeEnter: async (to, from, next) => {
			const slug = to.params.slug; // Get slug dynamically from the URL
			await store.dispatch('getItemBySlug', { type: "pages", slug });  // fetch authentication data from API
			next();
		}
	},

	{
		path: '/riddle/:slug',
		name: 'riddle',
		component: () => import("@/views/Riddle.vue"),
		beforeEnter: async (to, from, next) => {
			try {
				const params = null;
				if (!hasCategories(params)) await store.dispatch("getItems", { type: "categories", params: params });
				// to.isReady = false;  // Set the route as ready
				const slug = to.params.slug; // Get slug dynamically from the URL
				console.log(slug);
				await store.dispatch('getItemBySlug', { type: "riddle", name: "post", slug });  // fetch authentication data from API
				next();
			} catch (error) {
				console.error('Error fetching post:', error);
				next(false); // Prevent navigation if there's an error
			}
		}
	},
	{
		path: '/:slug',
		name: 'article',
		component: () => import("@/views/Detail.vue"),

		beforeEnter: async (to, from, next) => {
			try {
				const params = null;
				if (!hasCategories(params)) await store.dispatch("getItems", { type: "categories", params: params });
				// to.isReady = false;  // Set the route as ready
				const slug = to.params.slug; // Get slug dynamically from the URL
				await store.dispatch('getItemBySlug', { type: "posts", name: "post", slug });  // fetch authentication data from API
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
