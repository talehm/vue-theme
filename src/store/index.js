import Vuex from 'vuex';
import api from "../api/index"
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		authData: null,
		media: [],
		posts: [],
		definitions: []
	},
	mutations: {
		setPost(state, post) {
			state.post = post;
		},
		setItems(state, data) {
			state[data.name ?? data.type] = data.items;
		},
		setItem(state, data) {
			state[data.name ?? data.type] = data.item;
		},
		setMedia(state, item) {
			state.media.push(item);
		},
		setDefinition(state, item) {
			state.definition = item;
		},
	},
	actions: {
		async getItemBySlug({ commit }, { type, name, slug }) {
			try {
				const item = await api.fn.getItem(`${type}/?slug=${slug}`);
				// Commit the post to the state
				commit('setItem', { type, name, item });
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		},
		async getDefinitionBySlug({ commit }, slug) {
			try {
				const post = await api.fn.getItem(`definition/?slug=${slug}`,);
				// Commit the post to the state
				commit('setDefinition', post);
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		},
		async getBriefDefinition({ getters, commit }, text) {
			const type = 'definition';
			const slug = `definition-of-${text}`;
			if (!getters.singleBySlug({ type: 'definition', slug: slug })) {
				const params = { slug: slug, _fields: ['acf.brief', 'id', 'link', 'slug', 'title'] };

				const item = await api.fn.getItem(type, params, false);
				commit('setItem', { type, name: "definitions", item });
				return item;

			}

		},
		async getItems({ getters, commit }, { type, name, params }) {
			try {
				if (name && getters[name] && getters[name].length > 0) return;
				if (!name && getters[type] && getters[type].length > 0) return;
				const items = await api.fn.getItems(type, params);
				commit('setItems', { type, name, items });
				return items;
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		},
		async getItemById({ commit }, { type, id }) {
			try {
				if (id === 0) return;
				switch (type) {
					case "media": {
						const item = await api.fn.getMedia(`${type}/${id}`);
						if (item) commit('setMedia', item);
						break;
					}
					default:
						break;
				}

			} catch (error) {
				console.error('Error fetching post:', error);
			}
		}
	},
	getters: {
		post(state) {
			return state.post;
		},
		items(state) {
			return state.items;
		},
		posts(state) {
			return state.posts;
		},
		categories(state) {
			return state.categories;
		},
		singleBySlug: state => ({ type, slug }) => {
			for (let id in state[type]) {
				if (decodeURI(state[type][id].slug) === slug) {
					return state[type][id];
				}
			}
		},
	},
});
