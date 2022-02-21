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
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
