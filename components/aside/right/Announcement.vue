<script setup lang="ts">

const data = ref<string>('')

onMounted(() => {
  usePoem().load(response => {
    data.value = response.data.content
  })
})

</script>

<template>
  <div v-show="data" :class="`border-cyan-500`" class="w-full bg-base-100 rounded border-l-2 shadow-sm">
    <div class="px-4 py-3">
      <span class="inline-block text-sm py-0.5">{{ data }}</span>
    </div>
  </div>
</template>
