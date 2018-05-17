import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import AppMovies from './components/AppMovies.vue'
import AddMovie from './components/AddMovie.vue'

import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
	{path: '/', redirect: '/movies'},
	{path: '/movies', component: AppMovies , name: 'movies'},
	{path: '/add-movie', component: AddMovie , name: 'add-movie'}

]

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')
