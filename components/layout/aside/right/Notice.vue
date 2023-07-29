<script setup lang="ts">
const data = ref<string>('')

const loading = ref<boolean>(true)

onMounted(() => {
  usePoem().load(response => {
    data.value = response.data.content
    loading.value = false
  })
})

</script>

<template>
  <div class="w-full bg-light rounded border-l-2 border-cyan-500 shadow-sm">
    <div class="px-4 py-3">
      <span class="inline-block text-sm py-0.5">{{ data }}</span>
    </div>
  </div>
</template>
