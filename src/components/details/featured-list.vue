<template>
	<div v-if="isCardView">
		<h2 class="text-h4 font-weight-bold pb-4">Featured {{ type }}</h2>
		<v-row v-if="items?.length > 0">
			<v-col v-for="item in items" :key="item.id" cols="12" lg="4" md="6" sm="6">
				<v-card dark flat :to="`/${item.slug}`">
					<media :aspect-ratio="16 / 9" class="elevation-2 fill-height"
						gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)" height="600px" :id="item.media" isFull>
						<template #content>
							<div class="d-flex flex-column justify-space-between fill-height">
								<v-card-text>
									<v-btn color="accent" v-if="item.category"> {{ item.category }}</v-btn>
								</v-card-text>
								<v-card-text>
									<div class="text-h5 py-3 font-weight-bold" style="line-height: 1.2">
										{{ item.title }}
									</div>
									<div class="d-flex align-center">
										<!-- <v-avatar color="accent" size="36">
											<v-icon dark>mdi-book-open-variant-outline</v-icon>
										</v-avatar> -->
										<div class="pl-2">{{ item.text }}</div>
									</div>
								</v-card-text>
							</div>
						</template>
					</media>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>
<script>
import postMixin from "../mixins/post-default";
export default {
	mixins: [postMixin],
	props: {
		view: String,
		type: String,
		isGrid: {
			type: Boolean,
			default: false
		},
		isList: {
			type: Boolean,
			default: false
		}
	},
	components: {
		media: () => import("@/components/details/image.vue"),
	},
	computed: {
		isCardView() {
			return this.view === "card";
		},
		data() {
			return this.$store.state[this.type].find(t => t.params === this.params);
		},
		items() {
			if (this.type === "categories") return this.data?.items.map(item => ({
				id: item.id,
				media: item.acf?.media,
				title: item.name,
				text: `${item.count} articles`,
				slug: "category/" + item.slug
			}))
			else return this.data?.items.map(item => ({
				id: item.id,
				media: item.featured_media,
				title: item.title.rendered,
				text: ``,
				category: this.getCategoryName(item.categories[0]),
				slug: item.slug

			}))
		},
		categories() {
			return this.$store.state.categories;//.filter(p => p.id != this.post.id);
		},
	},
	methods: {
		getMediaId(item) {
			switch (this.type) {
				case "categories":
					return item.acf.media
				case "posts":
					return item.featured_media
				default:
					return item.featured_media;
			}
		}
	},
	mounted() {
		if ((!this.items || this.items?.length === 0) || this.data.params != this.params) this.$store.dispatch("getItems", { type: this.type, params: null });
	}

}
</script>