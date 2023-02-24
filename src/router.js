import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import Page404 from "./pages/Page404.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ListApartments from "./components/main-apartment-index/ListApartments.vue";

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
      path: "/apartament",
      name: "apartment-page",
      component: ApartmentPage,
    },
    // {
    //   path: "/Apartment-List",
    //   name: "apartment-list",
    //   component: ListApartments,
    // },
  ],
});

export { router };
