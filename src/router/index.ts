import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import ProductDetails from "../views/ProductDetails.vue"
import Perfil from "../views/Perfil.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/productDetails/:id",
      name: "ProductDetails",
      component: ProductDetails,
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: Perfil,
    }  

  ],
});

export default router;
