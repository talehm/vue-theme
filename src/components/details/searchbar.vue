<template>
	<v-container>
		<!-- Search Bar -->
		<v-text-field v-model="query" label="Search..." @input="onSearch" clearable outlined dense
			prepend-inner-icon="mdi-magnify"></v-text-field>
		<!-- Search Results -->
		<v-list v-if="filteredResults.length">
			<v-list-item v-for="item in filteredResults" :key="item.id" :to="`/definition/${item.slug}`" link>
				<v-list-item-content>
					<v-list-item-title v-html="highlightMatch(item.title)"></v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<!-- No Results -->
		<p v-else-if="query != '' && filteredResults.length === 0">No results found.</p>
	</v-container>
</template>
<script>
import debounce from "lodash/debounce";

export default {
	name: "SearchBar",
	data() {
		return {
			query: "",
			filteredResults: [],
			apiUrl: "https://trueandfiction.com/wp-json/wp/v2/definition", // Replace with your WordPress endpoint
		};
	},
	methods: {
		// Debounced search for optimized API calls
		onSearch: debounce(async function () {
			if (this.query.trim() === "") {
				this.filteredResults = [];
				return;
			}

			try {
				const response = await fetch(
					`${this.apiUrl}?search=${encodeURIComponent(this.query)}&per_page=10`
				);
				const data = await response.json();

				this.filteredResults = data.map((post) => ({
					id: post.id,
					title: post.title.rendered, // Use rendered HTML title from WordPress
					slug: post.slug
				}));
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}, 300), // 300ms debounce time

		// Highlight search query in results
		highlightMatch(text) {
			const regex = new RegExp(`(${this.query})`, "gi");
			return text.replace(regex, '<span style="background-color: yellow;">$1</span>');
		},
	},
};
</script>
<style scoped>
.v-list-item {
	cursor: pointer;
}

.v-list-item:hover {
	background-color: #f5f5f5;
}
</style>