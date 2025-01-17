<template>
	<div>
		<post-list :type="'posts'" isList />
		<div class="pt-4" v-if="!noCategory">
			<h3 class="text-h5 font-weight-medium pb-4">Category</h3>
			<v-divider></v-divider>
			<v-card color="accent" dark flat v-for=" cat  in  categories " :key="cat.id" class="my-4"
				:to="`/category/${cat.slug}`">
				<v-card-text class="d-flex justify-space-between align-center white--text">
					<h6 class="text-h6">{{ cat.name }}</h6>
					<div class="text-h6">{{ cat.count }}</div>
				</v-card-text>
			</v-card>
		</div>
		<!-- <div class="pt-4">
			<h3 class="text-h5 font-weight-medium pb-4">Top Authors</h3>
			<v-divider></v-divider>
			<div class="pt-4">
				<div class="d-flex align-center mb-6" v-for="i in 5" :key="i">
					<v-avatar color="accent" size="64">
						<v-icon dark x-large>mdi-feather</v-icon>
					</v-avatar>
					<div class="pl-2">
						<div class="text-h6">Yan Lee</div>
						<div class="text-subtitle-1">47 Articles</div>
					</div>
				</div>
			</div>
		</div> -->
		<div class="pt-4">
			<h3 class="text-h5 font-weight-medium pb-4">Tags</h3>
			<v-divider></v-divider>
			<v-row class="pt-4">
				<v-col v-for=" i  in  7 " :key="i" class="flex-shrink-0" cols="auto">
					<v-chip color="accent">#Images</v-chip>
				</v-col>
			</v-row>
		</div>
		<div class="pt-4">
			<h3 class="text-h5 font-weight-medium pb-4">Newsletter</h3>
			<v-divider></v-divider>
			<v-text-field label="Your email adress" solo type="email" outlined flat class="pt-4"></v-text-field>
			<v-btn color="accent" block large>Subscrbe</v-btn>
		</div>
	</div>
</template>
<script>
import postMixin from "../mixins/post-default";

export default {
	name: "SidebarView",
	mixins: [postMixin],
	props: {
		noCategory: Boolean
	},
	components: {
		// Media: () => import("@/components/details/image.vue"),
		postList: () => import("@/components/details/post-list.vue")
	},
	computed: {
		categories() {
			return this.$store.state.categories.find(t => t.params === this.params)?.items;
		}
	}
}
</script>