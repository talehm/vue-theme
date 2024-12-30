import _helpers from "@/_helpers";
export default {
	data() {
		return {
			isReady: false
		}
	},
	computed: {
		categories() {
			return this.$store.state.categories;//.filter(p => p.id != this.post.id);
		},
	},
	beforeRouteUpdate(to, from, next) {
		this.isReady = false;

		switch (this.$route.name) {
			case "category":
				this.fetchCategories(to.params.slug).then(() => next());
				break;
			case "article":
				this.fetchItem(to.params.slug).then(() => next());
				break;
			default:
				break;
		}
	},
	methods: {
		fetchItem(slug) {
			return new Promise((resolve, reject) => {
				try {
					const categories = this.$store.state.categories;

					if (!categories || categories.length === 0) {
						this.$store.dispatch("getItems", { type: "categories", params: null })
							.then(() => this.$store.dispatch('getItemBySlug', { type: "posts", slug }))
							.then(() => resolve());
					} else {
						this.$store.dispatch('getItemBySlug', { type: "posts", slug })
							.then(() => resolve());
					}
					// resolve();
				} catch (error) {
					console.error('Error fetching post:', error);
					reject()
				}
			})

		},
		fetchCategories(slug) {
			return new Promise((resolve, reject) => {
				try {
					const categories = this.$store.state.categories;
					const fetchPosts = (category) => {
						const name = _helpers.fn.toCamelCase(category.name);
						return this.$store.dispatch('getItems', {
							type: "posts",
							name: name,
							params: {
								per_page: 10, // this.$store.state.site.posts_per_page,
								page: 1,
								categories: category?.id,
							}
						});
					};

					if (!categories || categories.length === 0) {
						this.$store.dispatch("getItems", { type: "categories", params: null })
							.then(() => {
								const category = this.$store.state.categories.find(c => c.slug === slug);
								if (category) {
									fetchPosts(category).then(() => resolve());
								} else {
									resolve(); // Handle category not found scenario
								}
							});
					} else {
						const category = this.$store.state.categories.find(c => c.slug === slug);
						if (category) {
							fetchPosts(category).then(() => resolve());
						} else {
							resolve(); // Handle category not found scenario
						}
					}
					// fetch authentication data from API
				} catch (error) {
					console.error('Error fetching post:', error);
					reject(false); // Prevent navigation if there's an error
				}
			})

		},
		getCategoryName(id) {
			const cat = this.categories?.find(c => c.id == id);
			if (!cat) return null;
			return cat.name;
		},
		getImageById(id) {
			this.$store.dispatch('getItemById', {
				type: 'media',
				id: id
			});
		},
		formatDate(dateStr) {
			const date = new Date(dateStr);

			// Format the date as "dd MMM yyyy"
			const formattedDate = date.toLocaleDateString("en-US", {
				day: "2-digit",
				month: "short",
				year: "numeric"

			});
			return formattedDate;

		},
		calculateReadTime(content) {
			const wordCount = content.split(' ').length + 1;
			let time = wordCount / 200;

			if (!Number.isInteger(time)) {
				time = Math.ceil(time);
			}

			return `${time} min read`;
		},
		// getImageThumbnail(id) {
		// 	if (id > 0) this.getImageById(id).then(media => { console.log(media?.media_details.sizes.thumbnail.source_url); return media?.media_details.sizes.thumbnail.source_url; });
		// }
	}
}