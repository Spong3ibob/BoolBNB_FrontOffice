import { reactive } from "vue";

export const store = reactive({
  backendUrl: import.meta.env.VITE_BACKEND_URL,
  apartments: [],
  filteredApartments: [],
  searchInput: '',
});
