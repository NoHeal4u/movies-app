<template>

<div>
	<p>Add Movie</p>

	<form @submit.prevent="addMovie">
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Title</label> 
    <div class="col-8">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="fa fa-address-card"></i>
        </div> 
        <input <input v-model = "newMovie.title" class="form-control here" type="text" placeholder = "Model">
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="text1" class="col-4 col-form-label">Director</label> 
    <div class="col-8">
      <input <input v-model = "newMovie.director" class="form-control here" type="text" placeholder = "Brand">
    </div>
  </div>
  <div class="form-group row">
    <label for="text2" class="col-4 col-form-label">Link URL</label> 
    <div class="col-8">
      <input v-model="newMovie.imageUrl" class="form-control here" type="text">
    </div>
  </div>
  <div class="form-group row">
    <label for="text3" class="col-4 col-form-label">Duration</label> 
    <div class="col-8">
      <input v-model="newMovie.duration" class="form-control here" type="text">
    </div>
  </div>
  <div class="form-group row">
    <label for="text3" class="col-4 col-form-label">Release date</label> 
    <div class="col-8">
      <input v-model="newMovie.releaseDate" class="form-control here" type="text">
    </div>
  </div>
   <div class="form-group row">
    <label for="text3" class="col-4 col-form-label">Genre</label> 
    <div class="col-8">
      <input v-model="newMovie.genre" class="form-control here" type="text">
    </div>
  </div>
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
</div>
</template>



<script>
	
	import { movies } from '../services/Movies.js'

	export default {

		data() {

			return {

				newMovie: {
					title:'',
					director:'',
					imageUrl:'',
					duration:'',
					releaseDate:'',
					genre:''

				}
			}
		},

		methods : {
			addMovie(){
				movies.add(this.newMovie)
				this.$router.push('/movies')
			}
		}
	}

</script>

