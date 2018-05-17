<template>
<div>
	<p>AppMovies</p>
	<p>{{getCounter}}</p>

  <div class="card" style="width: 18rem;" v-for="movie in movies">
 
  <div class="card-body">
    <h5 class="card-title">Title:{{ movie.title }}</h5>
    <p class="card-text">Director:{{ movie.director }}</p>
  
    
  </div>
</div>

</div>
	
</template>

<script>

import { movies } from '../services/Movies'
import MovieRow from './MovieRow.vue'

import {mapGetters, mapMutations} from 'vuex'

	export default {

		// created() {
		// 	movies.getAll()
		// 	.then((response) => {
		// 		this.movies = response.data
		// 		console.log(this.movies)
		// 	}).catch((error)=>{
		// 		console.log(error)
		// 	})
		// },

		data(){

			return {

				movies: [],
				intervalId: null
			}
		},

		beforeRouteEnter(to, from , next) {
			movies.getAll().then(({data})=>{
				next((context)=>{
					context.movies = data
				})
			})
		}, //njegov nacin

		computed: {
			...mapGetters([
	           	'getCounter'])
		},

		methods: {
			...mapMutations([
				'incrementCounter'])
		},

		mounted() {
			this.intervalId = setInterval(()=>{
				this.incrementCounter()
			}, 1000)
			
		},

		destroyed() {
			clearInterval(this.intervalId)
		}

	}

	// computed: {
	// 	magicNumber(){
			
	// 		return this.$store.getters.getCounter
			
	// 	}
	// }

	// ...mapGetters([
	// 	'getCounter'])

</script>