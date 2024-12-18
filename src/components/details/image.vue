<template>
	<v-img :src="media" v-bind="$attrs"><template v-slot:placeholder v-if="!media">
			<div class="d-flex align-center justify-center fill-height">
				<v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
			</div>
		</template>
		<slot name="content"></slot>
	</v-img>
</template>
<script>
import postMixin from "../mixins/post-default";

export default {
	name: "ImageView",
	mixins: [postMixin],
	props: {
		id: Number,
		isThumbnail: {
			type: Boolean,
			default: false
		},
		isFull: {
			type: Boolean,
			default: false
		},
		isMedium: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		url() {
			return this.$store.state.media.find(media => media.id === this.id);
		},
		thumbnail() {
			return this.url?.media_details.sizes.thumbnail.source_url;
		},
		full() {
			return this.url?.source_url;
		},
		medium() {
			return this.url?.media_details.sizes.medium.source_url;
		},
		media() {
			if (this.isThumbnail) return this.thumbnail;
			if (this.isFull) return this.full;
			if (this.isMedium) return this.medium;

			return this.thumbnail;
		}
	},

	mounted() {
		if (!this.url) this.getImageById(this.id);
	}
}
</script>