<template>
  <div class="home">
    <MovieCard />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";
import axios from 'axios';

export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: null
    }
  },
  created() {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=9bbf7263&t=star')
    .then(res => {
      console.log(res)
      this.movies  = res.data
    })
    .catch(e => {
      console.log(e)
    })
  }
};
</script>

<style scoped>
.home {
  display: inline-block;
}
</style>
