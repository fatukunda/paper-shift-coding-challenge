import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import { auth } from "../config/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products/:id",
    name: "SingleProduct",
    component: () => import("../views/SingleProduct.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// Check if user is logged in
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  if (requiresAuth && !auth.currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
