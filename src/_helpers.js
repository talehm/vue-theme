import { useHead } from '@vueuse/head';

export default {
	fn: {
		addYoastMeta(data) {
			useHead({
				title: data.yoast_head_json.title,
				meta: [
					{ name: 'description', content: data.yoast_head_json.og_description },
					{ property: 'og:title', content: data.yoast_head_json.og_title },
					{ property: 'og:description', content: data.yoast_head_json.og_description },
					{ property: 'og:url', content: data.yoast_head_json.og_url },
					{ property: 'og:locale', content: data.yoast_head_json.og_locale },
					{ property: 'og:type', content: data.yoast_head_json.og_type },
					{ name: 'robots', content: data.yoast_head_json.robots.index },
					{ name: 'twitter:card', content: data.yoast_head_json.twitter_card },
					{ name: 'twitter:title', content: data.yoast_head_json.og_title },
					{ name: 'twitter:description', content: data.yoast_head_json.og_description },
					{ name: 'twitter:image', content: data.yoast_head_json.twitter_image },
					{ rel: 'canonical', href: data.yoast_head_json.canonical },
				],
			});
		},
	}
};