import { reactive } from "vue";

export const store = reactive({
  apartments: [],
  filteredApartments: [],
  searchInput: '',
});
