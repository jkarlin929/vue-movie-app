<template>
  <div class="home">
    <MovieCard />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "Home",
  components: {
    MovieCard,
  },
};
</script>
