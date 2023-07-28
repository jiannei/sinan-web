<script setup lang="ts">
const api = useApi()

const store = useStore()

// 取全局配置/主题配置
const {data: theme} = api('/theme')
store.theme = theme.value

// https://github.com/nuxt/nuxt/issues/12266
const loading = ref(true);
const nuxtApp = useNuxtApp();
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

// 取页面配置：路由更新时取页面配置，共享 state
watchEffect(async () => {
  const route = useRoute().name

  const {data: page} = await api(`/page/${route as string}/config`)

  store.page = page.value
})

function aside(position:string) {
  return store.page.components.filter((item) => item.position === position);
}
</script>

<template>
  <div class="relative h-screen bg-base-200 text-base-content/75 font-normal overflow-y-auto">
    <header class="bg-base-100 shadow-sm">
      <AppHeader :nodes="store.theme?.nodes" v-if="!loading"/>
    </header>

    <!-- 主体 -->
    <section class="flex justify-between max-w-6xl mx-auto my-6 px-8" :class="{'flex-row-reverse':store.page.aside.reverse }">
      <aside class="fixed inset-y-1/4 -ml-24 w-24"  v-if="aside('left').length">
        <AppAside :components="aside('left')"/>
      </aside>

      <!--内容区-->
      <main class="flex-1 max-w-3xl space-y-3">
        <slot/>
      </main>

      <!--右侧边栏-->
      <aside class="w-72 space-y-3" v-if="aside('right').length">
        <AppAside :components="aside('right')"/>
      </aside>
    </section>
  </div>
</template>

<style scoped>

</style>