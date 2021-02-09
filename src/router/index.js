import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sort from "../views/Sort.vue";
import Filter from "../views/Filter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sort",
    name: "Sort",
    component: Sort,
  },
  {
    path: "/filter",
    name: "Filter",
    component: Filter,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
