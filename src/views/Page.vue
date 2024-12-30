<template>
	<v-card v-if="page" class="mx-auto ma-2">
		<!-- <testspeech /> -->
		<v-card-text class="">
			<header class="w-100">
				<p class="text-h4 text-center" v-html="page.title.rendered"></p>
			</header>
			<div ref="textToRead" class="paragraphs" v-html="page.content.rendered"></div>
			<div class="text-caption pt-4 d-flex justify-space-between">
			</div>
		</v-card-text>
	</v-card>
</template>
<script>
export default {
	name: "PageView",
	props: {
		slug: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			request: {
				type: "pages",
				slug: this.slug,
				showLoading: true,
			},
		};
	},
	computed: {
		page() {
			return this.$store.state.pages;
		},
	},
};
</script>