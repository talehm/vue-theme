<template>
	<div>
		<v-row>
			<v-col cols="12" lg="12" xl="8">
				<div>
					<div>
						<v-row>
							<v-col cols="12" md="6" lg="4" v-for="item in items" :key="item.id">
								<v-hover v-slot:default="{ hover }" open-delay="50" close-delay="50">
									<div>
										<v-card flat :color="hover ? 'white' : 'transparent'"
											:elevation="hover ? 12 : 0" hover :to="`/category/${item.slug}`">
											<media :id="item.acf?.media" isMedium :aspect-ratio="16 / 9"
												gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)" height="200px"
												class="elevation-2" style="border-radius: 16px">
												<template #content>
													<div class="d-flex flex-column justify-space-between fill-height">
														<v-card-text>
															<v-btn color="accent"><v-avatar color="accent" size="36">
																	<v-icon dark>mdi-book-open-variant-outline</v-icon>
																</v-avatar>
																<div class="pl-2">{{ item.count }} articles</div>
															</v-btn>
														</v-card-text>
													</div>
												</template>
											</media>
											<v-card-text>
												<div class="text-h5 font-weight-bold primary--text">
													{{ item.name }}
												</div>
												<div class="text-body-1 py-4" v-html="item.description"></div>
											</v-card-text>
										</v-card>
									</div>
								</v-hover>
							</v-col>
						</v-row>
					</div>
				</div>
			</v-col>
			<v-col>
				<div>
					<siderbar noCategory />
				</div>
			</v-col>
		</v-row>
	</div>
</template>
<script>
export default {
	name: "CategoryView",
	props: [],
	computed: {
		items() {
			return this.$store.state.categories.map(c => ({ ...c, description: c.description.replace(/<[^>]*>/g, '') }) // Removes all tags
			);
		}
	},
	components: {
		siderbar: () => import("@/components/details/sidebar"),
		media: () => import("@/components/details/image.vue"),

	},
};
</script>