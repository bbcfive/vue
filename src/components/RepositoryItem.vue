<script setup>

const props = {
  repo: {}
};
</script>

<template>
  <div class="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
    <h3 class="text-lg font-semibold mb-2">
      <a :href="props.repo.html_url" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
        {{ props.repo.name }}
      </a>
    </h3>
    <p class="text-gray-600 mb-2">{{ props.repo.description }}</p>
    <div class="flex justify-between text-sm text-gray-500">
      <span>Created: {{ new Date(props.repo.created_at).toLocaleDateString() }}</span>
      <span>Stars: {{ props.repo.stargazers_count.toLocaleString() }}</span>
    </div>
  </div>
</template>