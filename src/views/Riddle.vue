<template>
	<div>
		<v-row>
			<v-col cols="12" lg="12" xl="8">
				<div>
					<h1 class="text-h4 text--primary font-weight-medium pa-4">{{ item.title.rendered }}</h1>
					<v-card class="mx-auto ma-4" v-for="( element, i) in elements" :key="i">
						<article v-if="item">
							<v-card-text class="pb-0 d-flex justify-space-between">
								<span class="text-h5 text--primary">{{ (i + 1) }} . {{ element.riddle }} </span>
							</v-card-text>
							<v-expand-transition>
								<v-card-text class="pb-0" v-if="reveal[i]">
									<p class="text-h5 text--primary green--text text--darken-1">
										{{ element.answer }}
									</p>
								</v-card-text>
							</v-expand-transition>
							<v-btn text color="teal accent-4" @click="toggleReveal(i)"> Check </v-btn>
							<v-card-actions>
							</v-card-actions>
						</article>
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
	name: "RiddleView",
	mixins: [postMixin],
	data() {
		return {
			reveal: [],
		}
	},
	components: {
		// searchbar: () => import("@/components/details/searchbar"),
		siderbar: () => import("@/components/details/sidebar"),
		// definition: () => import("@/components/details/definition")
	},
	computed: {
		item() {
			return this.$store.state.post;
		},
		elements() {
			const content = this.item.content.rendered.replaceAll("<p>", "").replaceAll("</p>", "").trim();
			// let decoded = he.decode(content).replaceAll(/[\u2018\u2019]/g, "'").replaceAll(/[\u201C\u201D]/g, '"').replaceAll(/″/g, '"').replaceAll(/[\u2032\u02B9]/g, "'").trim();
			// const decodedString = he.decode(content);
			let fixed = content
				.replace(/&#8220;/g, '"') // Replace opening quotes
				.replace(/&#8221;/g, '"') // Replace closing quotes
				.replace(/&#8216;/g, "'") // Replace single opening quote
				.replace(/&#8217;/g, "'") // Replace single closing quote
				.replace(/&#8230;/g, "...") // Ellipsis
				.replace(/&#8211;/g, "-") // En dash
				.replace(/&#8212;/g, "--")
				.replace(/&#8243;/g, '"'); // Em dash

			return JSON.parse(fixed);
		},

	},
	methods: {
		playAudio() {
			this.audio.play();
		},
		toggleReveal(index) {
			this.$set(this.reveal, index, !this.reveal[index]);
		}

	},
	mounted() {
		this.fetchCategories(this.slug).then(() => this.isReady = true);
		this.reveal = this.elements.map(() => false);

	}
};
</script>