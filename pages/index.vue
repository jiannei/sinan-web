<script setup lang="ts">
const api = useApi()
const {data: posts} = await api('/posts')

// console.log(useNuxtApp().payload.data)

const store = useStore()

</script>

<template>
  <!--工具栏-->
  <section class="w-full px-4 py-3 bg-base-100 rounded shadow-sm">
    <Toolbar :filters="store.page.filters"/>
  </section>

  <!--内容区-->
  <section class="bg-base-100 divide-y divide-base-100 shadow-sm">
    <div v-for="(post,key) in posts.items" :key="key" class="px-4 py-3">
      <div class="w-full flex items-center justify-between">
        <Avatar :url="post.feedable.creator.avatar" :name="post.feedable_type === 'App\\Models\\Post' ? post.feedable.creator.nickname : post.properties.author"
                styles="object-cover w-12 h-12 rounded-full ring-1 ring-offset-2 ring-base-200"/>

        <div class="flex-1 max-w-2xl flex items-center justify-between">
          <div class="space-y-1.5">
            <span class="leading-5">{{ post.title }}</span>
            <ul class="flex items-center space-x-1 text-xs text-base-content/50 h-6">
              <!-- TODO 首页是否显示数据源-->
              <li class="cursor-pointer hover:underline group">
                <span class="font-medium group-hover:text-base-content/75">{{ post.properties.source }}</span>
              </li>
              <li class="flex items-center">
                <span class="inline-block w-0.5 h-0.5 rounded-full bg-base-content/50"></span>
              </li>
              <li class="cursor-pointer hover:underline group">
                <span class="font-medium group-hover:text-base-content/75">{{ post.properties.author }}</span>
              </li>
              <li class="flex items-center">
                <span class="inline-block w-0.5 h-0.5 rounded-full bg-base-content/50"></span>
              </li>
              <li class="px-1">
                <time>{{ useDayjs(post.published_at).fromNow() }}</time>
              </li>
              <li v-if="post.topic">
              </li>
            </ul>
          </div>

          <div class="bg-base-200 px-1 py-0.5 rounded-md" v-show="post.properties.count.comment">
            <!--TODO feed score-->
            <span class="text-xs text-base-content/50 font-medium">{{ post.properties.count.comment }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>