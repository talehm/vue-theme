<template>
	<div>
		<v-row>
			<v-col cols="12" lg="12" xl="8">
				<div>
					<searchbar class=" pl-16 pr-16 mx-auto"></searchbar>
					<v-card class="mx-auto ma-2">
						<div v-if="item" class="definition">
							<header class="mx-auto pa-8">
								<h1 class="text-h4 text--primary font-weight-medium" v-html="content.word"></h1><br>
								<span v-if="pronunciation" class="text-subtitle-1 blue-grey--text text--lighten-1">[{{
							pronunciation }}]</span>
								<v-icon dark @click="playAudio" class="font-size-sm green--text" v-if="audio"> fa4
									fa-solid fa-play </v-icon>
							</header>
							<v-row no-gutters class="pa-0 mb-4" v-for="(item, i) in content.results" :key="i">
								<v-col cols="12">
									<definition :item="item" :length="content.results.length" :index="i + 1" />
								</v-col>
							</v-row>
						</div>
					</v-card>
				</div>
			</v-col>
			<v-col>
				<div>
					<siderbar />
				</div>
			</v-col>
		</v-row>
	</div>
</template>
<script>
import postMixin from "@/components/mixins/post-default"
// import he from 'he';

export default {
	name: "DefinitionView",
	mixins: [postMixin],
	components: {
		searchbar: () => import("@/components/details/searchbar"),
		siderbar: () => import("@/components/details/sidebar"),
		definition: () => import("@/components/details/definition")
	},
	computed: {
		item() {
			return this.$store.state.definition;
		},
		content() {
			const content = this.item.content.rendered
				.replaceAll("<p>", "") // Remove opening <p> tags
				.replaceAll("</p>", "") // Remove closing </p> tags
				.trim();

			// Replace HTML entities
			let fixed = content.replace(/"/g, "'")
				.replace(/&#8220;/g, '"') // Replace opening quotes
				.replace(/&#8221;/g, '"') // Replace closing quotes
				.replace(/&#8216;/g, "'") // Replace single opening quote
				.replace(/&#8217;/g, "'") // Replace single closing quote
				.replace(/&#8230;/g, "...") // Ellipsis
				.replace(/&#8211;/g, "-") // En dash
				.replace(/&#8212;/g, "--") // Em dash
				.replace(/&#8243;/g, '"'); // Double prime

			// Optional: Check if the content is a valid JSON string before parsing
			console.log("AAAA");
			fixed = fixed.replace(/"(<a [^>]*>(.*?)<\/a>)"/g, '"$2"');
			console.log(fixed);
			let jsonObject = JSON.parse(fixed);

			try {
				// Parse the cleaned string

				// Function to recursively clean keys
				const extractTextFromKeys = (obj) => {
					if (typeof obj === 'object' && obj !== null) {
						Object.keys(obj).forEach(key => {
							// Process each key to remove HTML tags
							let cleanKey = key.replace(/<a [^>]*>(.*?)<\/a>/g, '$1');
							if (cleanKey !== key) {
								// Rename the key
								obj[cleanKey] = obj[key];
								delete obj[key];
							}
							// Recurse for nested structures
							if (typeof obj[cleanKey] === 'object') {
								extractTextFromKeys(obj[cleanKey]);
							}
						});
					}
				};

				// Clean keys in the parsed JSON object
				extractTextFromKeys(jsonObject);
				// Output the final processed JSON
				console.log(JSON.stringify(jsonObject, null, 2));
			} catch (error) {
				console.error("Error parsing JSON:", error);
			}
			return jsonObject


		},
		pronunciation() {
			if (!this.content.pronunciation || !this.content.pronunciation.all) return;
			const regex = /u([0-9a-fA-F]{4})/g; // Match 'uXXXX' without backslashes
			const replaceUnicodeMatches = (match, hexCode) => {
				// Convert the hexadecimal string (e.g., '026a') to an integer and return the corresponding Unicode character
				return String.fromCharCode(parseInt(hexCode, 16));
			}
			return this.content.pronunciation.all.replace(regex, replaceUnicodeMatches);
		},
		audio() {
			if (this.content.audio === "") return;
			return new Audio(this.content.audio);
		},
	},
	methods: {
		playAudio() {
			this.audio.play();
		},

	},
	mounted() {
		console.log("AA");
		this.fetchCategories(this.slug).then(() => this.isReady = true);

	}
};
</script>