<script setup>
import multiavatar from "@multiavatar/multiavatar/esm";

defineProps({
  url: {
    type: String,
    default: ''
  },
  styles: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <img v-if="url" :src="url" :class="styles" :alt="name">
  <div v-else v-html="multiavatar(name)" :class="styles"/>
</template>

<style scoped>

</style>