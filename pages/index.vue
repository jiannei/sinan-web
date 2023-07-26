<script setup lang="ts">
const {data} = await useFetch('/api/page')

</script>

<template>
  <div class="w-full px-4 py-3 bg-base-100 rounded shadow-sm">
    <Toolbar :filters="data.filters"/>
  </div>
</template>

<style scoped>

</style>