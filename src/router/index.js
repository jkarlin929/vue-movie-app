import { createRouter, createWebHistory } from "vue-router";
import MovieList from "../views/MovieList.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "MovieList",
    component: MovieList,
  },
  {
    path: "/About",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
