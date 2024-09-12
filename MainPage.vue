<script>
import { useSearchStore } from './stores/search-store';
import LanguageFilter from './components/search/LanguageFilter.vue';
import DateRangeFilter from './components/search/DateRangeFilter.vue';
import StarFilter from './components/search/StarFilter.vue';
import RepositoryList from './components/search/RepositoryList.vue';

export default {
  name: 'MainPage',
  components: {
    LanguageFilter,
    DateRangeFilter,
    StarFilter,
    RepositoryList
  },
  setup() {
    const searchStore = useSearchStore();

    function handleSearch() {
      searchStore.performSearch();
    }

    return {
      handleSearch
    };
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">GitHub Repository Search</h1>
    <div class="grid gap-6 md:grid-cols-3 mb-8">
      <LanguageFilter />
      <DateRangeFilter />
      <StarFilter />
    </div>
    <button
      @click="handleSearch"
      class="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-8"
    >
      Search Repositories
    </button>
    <RepositoryList />
  </div>
</template>