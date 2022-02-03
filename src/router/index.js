import { createWebHistory, createRouter } from "vue-router";
import tabla from "@/views/tabla.vue";
import agregar from "@/views/agregar.vue";

const routes = [
  {
    path: "/",
    name: "tabla",
    component: tabla,
  },
  {
    path: "/about",
    name: "agregar",
    component: agregar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;