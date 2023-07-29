<script setup lang="ts">
import AppHeader from "~/components/layout/AppHeader.vue";
import AppAside from "~/components/layout/AppAside.vue";

const api = useApi()

const store = useStore()

// 取全局配置/主题配置
const {data} = api('/theme')
store.theme = data.value

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

function aside(position: string) {
  return store.page.components.filter((item) => item.position === position);
}

const root = ref(null)
const {y} = useScroll(root)
const {width, height} = useWindowSize()

function scrollTop(el: any): void {
  //el.scrollTop = 0
  el.scroll({top: 0, left: 0, behavior: 'smooth'})
}

const colorMode = useColorMode()

function toggleColor() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

</script>

<template>
  <div ref="root" class="relative h-screen bg-normal text-light font-normal overflow-y-auto">
    <header class="bg-light shadow-sm">
      <AppHeader :nodes="store.theme?.nodes" v-if="!loading"/>
    </header>

    <!-- 主体 -->
    <section class="flex justify-between max-w-6xl mx-auto my-6 px-8"
             :class="{'flex-row-reverse':store.page.aside.reverse }">
      <aside class="fixed inset-y-1/4 -ml-24 w-24" v-if="aside('left').length">
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

    <!--  底部工具  -->
    <div class="fixed bottom-6 right-6 space-y-3">
      <div class="block p-2.5 bg-light shadow rounded-md cursor-pointer">
        <button class="i-tabler-sun dark:i-tabler-moon" @click="toggleColor"/>
      </div>

      <div class="block p-2.5 bg-light shadow rounded-md cursor-pointer" v-show="y > height"
           @click="scrollTop(root)">
        <button class="i-tabler-arrow-up"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>