export default {
	computed: {
		categories() {
			return this.$store.state.categories;//.filter(p => p.id != this.post.id);
		},
	},
	mounted() {
		// this.getCategories();
	},
	methods: {
		// getCategories() {
		// 	// this.postsRequest.params.categories = this.post.categories;
		// 	if (this.categories?.length > 0) return;
		// 	return this.$store.dispatch("getItems", { type: "categories", params: null });
		// },
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