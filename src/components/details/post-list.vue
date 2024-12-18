<template>
	<div v-if="isList">
		<h3 class="text-h5 font-weight-medium pb-4">Popular Posts</h3>
		<v-divider></v-divider>
		<div v-if="items?.length > 0">
			<v-row v-for="item in items " :key="item.id" class="py-2">
				<v-col cols="12" md="6" lg="5">
					<v-card height="100%" flat :to="`/${item.slug}`">
						<media :id="item.featured_media" isFull :aspect-ratio="16 / 9" height="100%" />
						<!-- <v-img :src="getImageThumbnail(item.featured_media)" ></v-img> -->
					</v-card>
				</v-col>
				<v-col>
					<div>
						<v-chip depressed color="accent" x-chip>{{ getCategoryName(item.categories[0]) }}</v-chip>
						<h3 class="text-h6 font-weight-bold primary--text py-3">{{ item.title.rendered }}</h3>
						<div class="d-flex align-center">
							<v-avatar color="accent" size="24">
								<v-icon dark small>mdi-book-open-variant-outline</v-icon>
							</v-avatar>
							<div class="pl-2 text-subtitle-2">{{ calculateReadTime(item.content.rendered) }}</div>
						</div>
					</div>
				</v-col>
			</v-row>
		</div>
	</div>
	<div v-else-if="isGrid" class="pt-16">
		<h2 class="text-h4 font-weight-bold pb-4">Recommended For You</h2>
		<v-row v-if="items?.length > 0">
			<v-col v-for="item in items" :key="item.id" cols="12" lg="4" md="6">
				<v-hover v-slot:default="{ hover }" close-delay="50" open-delay="50">
					<div>
						<v-card :color="hover ? 'white' : 'transparent'" :elevation="hover ? 12 : 0" flat hover
							:to="`/${item.slug}`">
							<media :aspect-ratio="16 / 9" class="elevation-2"
								gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)" height="200px"
								:id="item.featured_media" isMedium>
								<template #content>
									<v-card-text>
										<v-chip depressed color="accent"
											x-chip>{{ getCategoryName(item.categories[0]) }}</v-chip>
									</v-card-text>
								</template>
							</media>
							<v-card-text>
								<div class="text-h5 font-weight-bold primary--text">
									{{ item.title.rendered }}
								</div>
								<div class="text-body-1 py-4" v-html="item.excerpt.rendered"> </div>
								<div class="d-flex align-center justify-space-between">
									<div class="d-flex align-center"><v-avatar color="accent" size="36">
											<v-icon dark>mdi-book-open-variant-outline</v-icon>
										</v-avatar>
										<div class="pl-2 ">{{ calculateReadTime(item.content.rendered) }}
										</div>
									</div>
									<div class="pl-2 float-end">{{ formatDate(item.modified) }}</div>
								</div>
							</v-card-text>
						</v-card>
					</div>
				</v-hover>
			</v-col>
		</v-row>
	</div>
</template>
<script>
import postMixin from "../mixins/post-default";
export default {
	mixins: [postMixin],
	props: {
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
		items() {
			return this.$store.getters[this.type];
		},
		categories() {
			return this.$store.state.categories;//.filter(p => p.id != this.post.id);
		},
	},
	methods: {
	},
	mounted() {
		this.$store.dispatch("getItems", { type: this.type, params: null });
		// this.getCategories();
	}

}
</script>