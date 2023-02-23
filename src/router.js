import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import Page404 from "./pages/Page404.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import AppMainDebug from "./components/debug/AppMainDebug.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-404",
      component: Page404,
    },
    {
      path: "/abitazione",
      name: "apartment-page",
      component: ApartmentPage,
    },
    {
      path: "/debug-main",
      name: "main-debug",
      component: AppMainDebug,
    },
  ],
});

export { router };
