<script setup lang="ts">
// 取页面结构配置：左侧边栏、主体、右侧边栏

const page = ref()

// 取页面数据
const data = reactive({})

</script>

<template>
  <div class="relative h-screen bg-base-200 text-base-content/75 font-normal">
    <header class="bg-base-100 shadow-sm">
      <nav class="flex items-center justify-between max-w-6xl px-8 py-2 mx-auto">
        <ul class="flex items-center space-x-1">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- 主体 -->
    <section class="flex justify-between max-w-6xl mx-auto my-6 px-8">
      <aside class="fixed inset-y-1/4 -ml-24 w-24 hidden">左侧边栏</aside>

      <!--内容区-->
      <main class="flex-1 max-w-3xl space-y-3">
        <slot />
      </main>

      <!--右侧边栏-->
      <aside class="w-72 space-y-3">
        右侧边栏
      </aside>
    </section>
  </div>
</template>

<style scoped>

</style>