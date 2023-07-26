<script setup lang="ts">

</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <header>
      <nav>
        <ul class="flex items-center space-x-1">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>footer</footer>
  </div>
</template>

<style scoped>

</style>