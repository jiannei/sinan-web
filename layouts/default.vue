<script setup lang="ts">

</script>

<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <div class="content">
    <slot />
  </div>

  <footer>footer</footer>
</template>

<style scoped>

</style>