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
			try {
				fixed = JSON.parse(fixed);
			} catch (error) {
				console.error("Error parsing JSON:", error);
			}

			// Function to remove anchor tags from keys only
			const extractTextFromKeys = (obj) => {
				if (typeof obj === 'string') {
					return obj; // No modification to values
				}

				if (Array.isArray(obj)) {
					return obj.map(extractTextFromKeys); // Recursively handle arrays
				}

				if (typeof obj === 'object' && obj !== null) {
					const result = {};
					for (const key in obj) {
						// Ensure we only access own properties of the object
						if (Object.prototype.hasOwnProperty.call(obj, key)) {
							const cleanKey = key.replace(/<a[^>]*>(.*?)<\/a>/g, '$1'); // Clean the key (not value)
							result[cleanKey] = extractTextFromKeys(obj[key]); // Recursively handle the value
						}
					}
					return result;
				}

				return obj; // Return the value if it's not a string, array, or object
			}

			// Process the content
			const result = extractTextFromKeys(fixed);
			console.log(result);
			return result;


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