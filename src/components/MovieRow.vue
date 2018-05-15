<template>
	<div>{{ movie.title }}</div>
</template>

<script>
	

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