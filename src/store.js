import { reactive } from "vue";

export const store = reactive({
  backendUrl: import.meta.env.VITE_BACKEND_URL,
  backendLoginUrl: import.meta.env.VITE_BACKEND_LOGIN_URL,
  backendRegisterUrl: import.meta.env.VITE_BACKEND_REGISTER_URL,
  apartments: [],
  filteredApartments: [],
  searchInput: '',
  servicesFilter: [],
});
