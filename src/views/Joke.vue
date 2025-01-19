<template>
	<div class="joke">
		<v-row>
			<v-col cols="12" lg="12" xl="2">
			</v-col>
			<v-col cols="12" lg="12" xl="6">
				<div>
					<div>
						<v-card flat color="transparent" class="article">
							<v-card-text>
								<div class="text-h4 font-weight-bold primary--text pt-4 pb-4">
									<h1>{{ title }}</h1>
								</div>
								<div class="d-flex align-center justify-space-between">
									<div class="d-flex align-center">
										<v-avatar color="accent" size="36">
											<v-icon dark>mdi-book-open-variant-outline</v-icon>
										</v-avatar>
										<div class="pl-2 text-body-1">{{ calculateReadTime(item.content.rendered) }}
										</div>
									</div>
								</div>
								<v-divider class="my-4 "></v-divider>
								<div ref="textToRead" class="paragraphs" v-html="item.content.rendered">
								</div>
								<v-card-actions class="float-left">
									<v-btn elevation="2" x-large :color="'success'" class="ma-2" :href="randomItem"
										target="_blank" rel="noopener noreferrer"> Read Another Joke </v-btn>
								</v-card-actions>
							</v-card-text>
						</v-card>
					</div>
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
export default {
	name: "JokeView",
	mixins: [postMixin],
	props: ["slug"],
	data() {
		return {
			briefDefinition: null,
			snackbar: false,
			text: 'Lorem ipsum dolor sit amet',
			vertical: false,
			absolute: true,
			top: true,
			snackbarStyle: {},
			randomItem: null
		}
	},
	components: {
		siderbar: () => import("@/components/details/sidebar"),
	},
	computed: {
		item() {
			return this.$store.state.post;
		},
		title() {
			return this.item.title.rendered.replace(/"/g, "'")
				.replace(/&#8220;/g, '"') // Replace opening quotes
				.replace(/&#8221;/g, '"') // Replace closing quotes
				.replace(/&#8216;/g, "'") // Replace single opening quote
				.replace(/&#8217;/g, "'") // Replace single closing quote
				.replace(/&#8230;/g, "...") // Ellipsis
				.replace(/&#8211;/g, "-") // En dash
				.replace(/&#8212;/g, "--")
				.replace(/&#8243;/g, '"'); // Em dash
		}
	},
	methods: {
		getRandomJoke() {
			this.$api.fn.getRandomItem("joke").then(link => {
				this.randomItem = link;
				// window.open(link, "_blank", "noopener,noreferrer");
			})

		}
	},
	mounted() {
		this.getRandomJoke();
	},
	beforeUnmount() {
		this.clear();
	}
};
</script>