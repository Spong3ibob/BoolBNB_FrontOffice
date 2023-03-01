import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import Page404 from "./pages/Page404.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import AdvanceSearch from './pages/AdvanceSearch.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/apartament/:slug",
      name: "apartment-page",
      component: ApartmentPage,
    },
    {
      path: "/advance/search-apartments/:address",
      name: "advance-search",
      component: AdvanceSearch,
    },
    // Any route not matched will be redirect to 404 - DEVE ESSERE SEMPRE L'ULTIMA ROTTA
    { 
      path: '/:pathMatch(.*)*',
      name: 'page-404',
      component: Page404,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export { router };
