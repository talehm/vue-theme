import Vuex from 'vuex';
import api from "../api/index"
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		authData: null,
		media: [],
		posts: []
	},
	mutations: {
		setPost(state, post) {
			state.post = post;
		},
		setItems(state, data) {
			state[data.type] = data.items;
		},
		setMedia(state, item) {
			state.media.push(item);
		}
	},
	actions: {
		async getPostBySlug({ commit }, slug) {
			try {
				const post = await api.fn.getItem(`posts/?slug=${slug}`);
				// Commit the post to the state
				commit('setPost', post);
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		},
		async getItems({ commit }, { type, params }) {
			try {
				const items = await api.fn.getItems(type, params);
				commit('setItems', { type, items });
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		},
		async getItemById({ commit }, { type, id }) {
			try {
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
		}
	},
});
