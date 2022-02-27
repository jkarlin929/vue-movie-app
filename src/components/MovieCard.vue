<template>
  <div class="movie-card">
    <h2>Movie Title: {{ movie.title }}</h2>
    <h4>Movie Release Date: {{ movie.releaseDate }}</h4>
    <p>Movie Description: {{ movie.description }}</p>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      movie: {
        id: 1,
        title: 'The Batman',
        releaseDate: 'March 3, 2022',
        description: 'The Batman gets revenge again but grittier and darker.'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie-card {
  padding: 16px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #8e00009e;
  margin-bottom: 18px;
}

.movie-card:hover {
  transform: scale(1.01);
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
