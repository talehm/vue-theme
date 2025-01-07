<template>
	<div>
		<v-row>
			<v-col cols="12" lg="12" xl="8">
				<div>
					<div>
						<v-card flat color="transparent" class="article">
							<media :id="item.featured_media" isFull :aspect-ratio="16 / 9"
								gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)" style="border-radius: 16px" />
							<v-card-actions class="float-left story-actions">
								<v-btn v-for="(action, i) in actions" :key="i" elevation="2" large :color="action.color"
									class="ma-2" @click="handle(action)">
									<v-icon left> {{ action.icon }} </v-icon>
									{{ action.text }}
								</v-btn>
							</v-card-actions>
							<v-card-text>
								<div>
									<v-btn color="accent">{{ getCategoryName(item.categories[0]) }}</v-btn>
								</div>
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
								<div ref="textToRead" class="paragraphs" v-html="item.content.rendered"
									@dblclick="getSelText($event)">
								</div>
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
		<brief-definition :item="briefDefinition" :style="snackbarStyle" @show="toggleDefinition" />
	</div>
</template>
<script>
import speechMixin from "@/components/mixins/speech";
import postMixin from "@/components/mixins/post-default"
export default {
	name: "ArticleView",
	mixins: [postMixin, speechMixin],
	props: ["slug"],
	data() {
		return {
			briefDefinition: null,
			snackbar: false,
			text: 'Lorem ipsum dolor sit amet',
			vertical: false,
			absolute: true,
			top: true,
			snackbarStyle: {}
		}
	},
	components: {
		siderbar: () => import("@/components/details/sidebar"),
		media: () => import("@/components/details/image.vue"),
		BriefDefinition: () => import("@/components/details/briefDefinition")
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
		toggleDefinition() {
			// this.briefDefinition.isOpen = !this.briefDefinition.isOpen;
			this.briefDefinition = null;
		},
		handle(action) {
			if (action.text == 'Listen') action.handle(this.item.content.rendered)
			else action.handle();
		},
		getSelText() {
			const selObj = window.getSelection();
			const range = selObj.getRangeAt(0);

			const wholeParagraph = selObj.anchorNode.data;
			const text = wholeParagraph
				.slice(range.startOffset, range.endOffset)
				.trim();
			const clientRect = range.getClientRects()[0];
			const hasDefiniton = this.briefDefinition != null && this.briefDefinition.word == text;
			if (hasDefiniton) {
				this.briefDefinition.isOpen = true;
			} else {
				this.$store.dispatch("getBriefDefinition", text).then((response) => {
					if (response?.acf.brief !== "" && response?.acf.brief != null) {
						this.briefDefinition = {
							content: response,
							word: text,
							isOpen: true,
							coordinates: {
								x: clientRect.x,
								y: clientRect.y + clientRect.height,
							},
						};
					} else {
						this.briefDefinition = null;
					}

				});
			}
		},
	},
	mounted() {
		this.addAction(this.actionList.play);
	},
	beforeUnmount() {
		this.clear();
	},
	watch: {
		"speech.isStopped": {
			handler(newValue) {
				if (newValue) {
					const textContainer = this.$refs.textToRead;
					textContainer.innerHTML = this.post.content.rendered;
				}
			},
			deep: true
		}
	},
};
</script>