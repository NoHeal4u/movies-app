<template>
<div>
	<div class="col-sm" v-text="movie.id"></div>
	<div class="col-sm" v-text="movie.title"></div>
	<div class="col-sm" v-text="movie.director"></div>
	<div class="col-sm" v-text="movie.genre"></div>
	<div class="col-sm" v-text="movie.duration"></div>
</div>

</template>

<script>
	
//treba je ubaciti, to sam preskocio

	export default {
		name: 'MovieRow',
		props: {
			movie: {
				type:Object,
				required: true
			}
		}
	}
</script>

