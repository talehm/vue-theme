<template>
	<div>
		<v-navigation-drawer v-if="!$vuetify.breakpoint.smAndUp" v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp"
			app color="primary" dark>
			<v-list color="primary" nav>
				<v-list-item v-for="(item, i) in btnItems" :key="i" :href="item.href" :target="item.target"
					:to="item.to" link>
					<v-list-item-content>
						<v-list-item-title>{{ item.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item v-for="(item, i) in categories" :key="i" :href="item.href" :target="item.target"
					:to="item.to" link>
					<v-list-item-content>
						<v-list-item-title>{{ item.name }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="white" elevate-on-scroll flat>
			<v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
				<v-row :no-gutters="!$vuetify.breakpoint.smAndUp" align="center" justify="space-between">
					<v-col class="d-flex align-center">
						<v-app-bar-nav-icon v-if="!$vuetify.breakpoint.mdAndUp" @click.stop="drawer = !drawer" />
						<v-toolbar-title class="font-weight-bold text-h5 primary--text" style="cursor: pointer"
							@click="$router.push('/')">
							<v-icon color="primary" large>mdi-book-open-variant-outline</v-icon> true&<span
								class="accent--text">fiction</span>
						</v-toolbar-title>
					</v-col>
					<v-col v-if="$vuetify.breakpoint.mdAndUp" cols="6 d-flex flex-row justify-center align-center">
						<!-- <v-btn v-for="(item, i) in categories" :key="i" :to="item.to" class="text-capitalize" exact
							exact-active-class="accent--text" text>{{ item.name }}
						</v-btn> -->
						<v-list v-for="(item, i) in mainCategories" :key="i" class="text-capitalize" exact
							exact-active-class="accent--text" text :to="item.name">
							<v-list-item v-if="item.count > 0" :to="`/category/${item.slug}`">
								<v-list-item-title>{{ item.name }}</v-list-item-title>
							</v-list-item>
							<v-menu offset-y v-else>
								<template v-slot:activator="{ on, attrs }">
									<v-list-item v-bind="attrs" v-on="on"> {{ item.name }} </v-list-item>
								</template>
								<v-list>
									<v-list-item v-for="(child, index) in getChildren(item)" :key="index"
										:to="`/category/${child.slug}`">
										<v-list-item-title>{{ child.name }}</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>
						</v-list>
						<v-list v-for="(item, i) in staticCategories" :key="i + '_static'" class="text-capitalize" exact
							exact-active-class="accent--text" text :to="item.to">
							<v-list-item :to="`${item.to}`">
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-col>
					<v-col v-if="$vuetify.breakpoint.mdAndUp" class="text-right">
						<v-btn v-for="(item, i) in btnItems" :key="i + '_static'" :color="item.color" :href="item.href"
							:outlined="item.outlined" :target="item.target" :to="item.to" class="ml-3 text-capitalize">
							<v-icon left>{{ item.icon }}</v-icon>
							{{ item.text }}
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-app-bar>
	</div>
</template>
<script>
export default {
	name: "AppbarView",
	data: () => ({
		drawer: null,
		btnItems: [
			// {
			// 	text: "Free Download",
			// 	href: "https://github.com/AGDholo/giraffe",
			// 	target: "_black",
			// 	color: "primary",
			// 	icon: "mdi-download",
			// },
		],
		staticCategories: [
			{
				title: "Riddles",
				to: "/riddles",
			}
		],
		categories: []
	}),
	methods: {
		getChildren(item) {
			return this.categories.filter(cat => cat.count > 0 && cat.parent === item.id);
		}
	}
	,
	computed: {
		// items() {
		// 	// const categories = this.$store.state.categories;
		// 	// console.log(categories);
		// 	// return categories;
		// }
		mainCategories() {
			return this.categories.filter(r => (r.count === 0 && r.parent === 0 && this.categories.some(p => p.parent === r.id)) || (r.count > 0 && r.parent === 0 && !this.categories.some(p => p.parent === r.id)))
		}
	},
	mounted() {
		this.$store.dispatch("getItems", { type: "categories", params: null }).then(result => {

			this.categories = result//.filter(r => (r.count === 0 && r.parent === 0 && result.some(p => p.parent === r.id)) || (r.count > 0 && r.parent === 0 && !result.some(p => p.parent === r.id)))
		});
	}
};
</script>