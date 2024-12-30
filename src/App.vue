<template>
	<v-app>
		<AppBar />
		<v-container class="mt-16">
			<router-view :key="$route.params.slug"></router-view>
		</v-container>
		<Footer></Footer>
	</v-app>
</template>
<script>
import postMixin from "./components/mixins/post-default";

export default {
	name: "App",
	mixins: [postMixin],
	components: {
		AppBar: () => import("@/components/layout/appbar.vue"),
		Footer: () => import("@/components/layout/footer.vue"),
	},
	data: () => ({}),
	mounted() {

	}
};
</script>