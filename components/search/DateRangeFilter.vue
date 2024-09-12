<script setup>
import { ref, watch } from 'vue';
import { useSearchStore } from '../../stores/search-store';
import { ElDatePicker } from 'element-plus';

const searchStore = useSearchStore();
const startDate = ref(undefined);
const endDate = ref(undefined);

watch([startDate, endDate], ([newStart, newEnd]) => {
  searchStore.setDateRange(
    newStart ? newStart.toISOString().split('T')[0] : null,
    newEnd ? newEnd.toISOString().split('T')[0] : null
  );
});
</script>

<template>
  <div class="space-y-2">
    <ElDatePicker
      v-model="startDate"
      type="date"
      placeholder="Start Date"
      :disabled-date="(time) => endDate && time > endDate"
      class="w-full"
    />
    <ElDatePicker
      v-model="endDate"
      type="date"
      placeholder="End Date"
      :disabled-date="(time) => startDate && time < startDate"
      class="w-full"
    />
  </div>
</template>