<template>
	<div>
		<v-row v-if="isReady">
			<v-col cols="12" lg="12" xl="8">
				<div>
					<div>
						<div>
							<h2 class="text-h4 font-weight-bold">{{ category.name }}</h2>
							<h4 class="text-h6">{{ description }}</h4>
						</div>
						<v-divider class="my-4"></v-divider>
						<post-list :type="categoryName" isGrid />
						<!-- <v-row>
							<v-col cols="12" md="6" lg="4" v-for="item in items" :key="item.id">
								<v-hover v-slot:default="{ hover }" open-delay="50" close-delay="50">
									<div>
										<v-card flat :color="hover ? 'white' : 'transparent'"
											:elevation="hover ? 12 : 0" hover :to="`/${item.slug}`">
											<media :id="item.featured_media" isMedium :aspect-ratio="16 / 9"
												gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)" height="200px"
												class="elevation-2" style="border-radius: 16px" />
											<v-card-text>
												<div class="text-h5 font-weight-bold primary--text">
													{{ item.title.rendered }}
												</div>
												<div class="text-body-1 py-4" v-html="item.excerpt.rendered"></div>
												<div class="d-flex align-center">
													<v-avatar color="accent" size="36">
														<v-icon dark>mdi-book-open-variant-outline</v-icon>
													</v-avatar>
													<div class="pl-2">Yan Lee · 22 July 2019</div>
												</div>
											</v-card-text>
										</v-card>
									</div>
								</v-hover>
							</v-col>
						</v-row> -->
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
import _helpers from '@/_helpers';
import postMixin from "@/components/mixins/post-default";

export default {
	name: "CategoryView",
	props: ["slug"],
	mixins: [postMixin],
	components: {
		siderbar: () => import("@/components/details/sidebar"),
		// media: () => import("@/components/details/image.vue"),
		postList: () => import("@/components/details/post-list.vue"),
	},
	computed: {
		category() {
			const category = this.categories?.find(c => c.slug === this.slug);
			return category;
		},
		items() {
			const name = this.category ? _helpers.fn.toCamelCase(this.category?.name) : null;
			return this.$store.state[name];
		},
		description() {
			return this.category?.description.replace(/<[^>]*>/g, '');
		},
		categoryName() {
			return _helpers.fn.toCamelCase(this.category?.name);
		}
	},
	mounted() {
		this.fetchCategories(this.slug).then(() => this.isReady = true);
	}
};
</script>