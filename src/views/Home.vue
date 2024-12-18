<template>
	<div>
		<div>
			<v-card to="detail">
				<v-img :aspect-ratio="16 / 10" dark gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
					height="70vh" src="../assets/main.png">
					<v-card-text class="fill-height d-flex align-end">
						<v-row class="flex-column">
							<v-col cols="12" lg="8" md="10" xl="7">
								<h2 class="text-h3 py-3" style="line-height: 1.2"> All you need to know! </h2>
							</v-col>
						</v-row>
					</v-card-text>
				</v-img>
			</v-card>
		</div>
		<v-row>
			<v-col cols="12" lg="12" xl="8">
				<div>
					<post-list :type="'posts'" isGrid />
					<div class="pt-16">
						<featured-list :type="'posts'" view="card" />
					</div>
					<!-- <div class="pt-16">
						<h2 class="text-h4 font-weight-bold">Latest Posts</h2>
						<div>
							<v-row v-for="i in 6" :key="i" class="py-4">
								<v-col cols="12" md="4">
									<v-card flat height="100%">
										<v-img :aspect-ratio="16 / 9" height="100%"
											src="https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_1280.jpg"></v-img>
									</v-card>
								</v-col>
								<v-col>
									<div>
										<v-btn color="accent" depressed>TRAVEL</v-btn>
										<h3 class="text-h4 font-weight-bold pt-3"> Ut enim blandit volutpat maecenas
											volutpat blandit </h3>
										<p class="text-h6 font-weight-regular pt-3 text--secondary"> Duis aute irure
											dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
											pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum. </p>
										<div class="d-flex align-center">
											<v-avatar color="accent" size="36">
												<v-icon dark>mdi-book-open-variant-outline</v-icon>
											</v-avatar>
											<div class="pl-2">Yan Lee · 03 Jan 2019</div>
										</div>
									</div>
								</v-col>
							</v-row>
						</div>
					</div> -->
				</div>
			</v-col>
			<v-col>
				<div class="pt-16">
					<siderbar />
				</div>
			</v-col>
		</v-row>
	</div>
</template>
<script>
export default {
	name: "HomeView",
	components: {
		siderbar: () => import("@/components/details/sidebar"),
		postList: () => import("@/components/details/post-list.vue"),
		featuredList: () => import("@/components/details/featured-list.vue")

	},
	computed: {
		posts() {
			return this.$store.state.posts;//.filter(p => p.id != this.post.id);
		},

	},
	methods: {

		getPosts() {
			// this.postsRequest.params.categories = this.post.categories;
			return this.$store.dispatch("getItems", { type: "posts", params: null });
		},
		getCategories() {
			// this.postsRequest.params.categories = this.post.categories;
			return this.$store.dispatch("getItems", { type: "categories", params: null });
		},
	},
	mounted() {


	}
};
</script>