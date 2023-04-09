import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/index"),
    },
    {
      path: "/about",
      name: "about",
      component: defineAsyncComponent(() => import("@/views/about")),
    },
    {
      path: "/services",
      name: "services",
      component: defineAsyncComponent(() => import("@/views/services")),
    },
    {
      path: "/contact",
      name: "contact",
      component: defineAsyncComponent(() => import("@/views/contact")),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
