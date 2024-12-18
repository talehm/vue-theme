const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: [
		'vuetify'
	],
	publicPath: process.env.NODE_ENV === 'production'
		? '/wp-content/themes/vue-theme/dist/' // Production base path
		: '/', // Development base path
})
