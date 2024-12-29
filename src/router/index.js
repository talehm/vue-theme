import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index';  // import the store
import _helpers from '@/_helpers';
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		beforeEnter: async (to, from, next) => {
			if (!store.state.categories || store.state.categories?.length === 0) await store.dispatch("getItems", { type: "categories", params: null });
			next();
		}
	},
	{
		path: '/categories',
		name: 'Categories',
		component: () => import("@/views/Categories.vue"),
		beforeEnter: async (to, from, next) => {
			try {
				if (!store.state.categories || store.state.categories?.length > 0) next();
				else await store.dispatch("getItems", { type: "categories", params: null });
				next();
			} catch (error) {
				console.error('Error fetching post:', error);
				next(false); // Prevent navigation if there's an error
			}

		}
	},
	{
		path: '/definition/:slug',
		name: 'Definition',
		props: route => {
			const slug = route.params.slug;

			// Find the category based on slug
			const category = store.state.categories.find(c => c.slug === slug);

			// Convert category name to camelCase
			const name = category ? _helpers.fn.toCamelCase(category.name) : null;

			// Return props
			return {
				category: category,
				items: store.state[name]
			};
		}, // Custom function to define props
		component: () => import("@/views/Definition.vue"),
		beforeEnter: async (to, from, next) => {
			try {
				if (!store.state.categories || store.state.categories?.length === 0) await store.dispatch("getItems", { type: "categories", params: null });
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
		path: '/:slug',
		name: 'article',
		component: () => import("@/views/Detail.vue"),

		beforeEnter: async (to, from, next) => {
			try {
				if (!store.state.categories || store.state.categories?.length === 0) await store.dispatch("getItems", { type: "categories", params: null });
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
