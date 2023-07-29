<script setup lang="ts">
import Community from "~/components/combobox/Community.vue";

interface IAuth {
  nickname: string,
  avatar: string
}

interface IProps {
  nodes: Array<any>,
  auth?: IAuth,
}

defineProps<IProps>()

const emit = defineEmits<{
  search: [command: string]
}>()
</script>

<template>
  <nav class="flex items-center justify-between max-w-6xl px-8 py-2 mx-auto">
    <!--左侧导航栏-->
    <div class="flex-1 max-w-3xl flex items-center">
      <Community :options="nodes"/>
    </div>

    <!--右侧导航栏-->
    <div class="w-72">
      <ul class="flex items-center justify-end space-x-1.5">
        <li class="p-1.5 rounded-full hover:bg-normal hover:text-cyan-500">
          <button title="搜索" class="i-tabler-search" @click="emit('search','')"></button>
        </li>
        <li class="p-1.5 rounded-full hover:bg-normal hover:text-cyan-500">
         <button title="趋势" class="i-tabler-trending-up"></button>
        </li>
        <li class="p-1.5 rounded-full hover:bg-normal hover:text-cyan-500">
          <button title="探索" class="i-tabler-world"></button>
        </li>
        <li class="p-1.5 rounded-full hover:bg-normal hover:text-cyan-500">
          <button title="探索" class="i-tabler-books"></button>
        </li>
        <li v-if="auth">
          <ul class="flex items-center justify-end space-x-1.5">
            <li class="p-1.5 rounded-full hover:bg-normal hover:text-cyan-500">
              <button title="讨论" class="i-tabler-message"></button>
            </li>
            <li class="p-1.5 rounded-full hover:bg-normal hover:text-cyan-500">
              <button title="创作" class="i-tabler-edit"></button>
            </li>
            <li class="p-1.5 rounded-full hover:bg-normal hover:text-cyan-500">
              <button  title="消息" class="i-tabler-bell"></button>
            </li>
            <!--          <li>-->
            <!--            <div class="relative cursor-pointer">-->
            <!--              <AvatarDropdown :auth="auth">-->
            <!--                <Avatar :url="auth.avatar" :name="auth.nickname" styles="w-8 h-8 rounded-full ring-1 ring-offset-2 ring-base-200"/>-->
            <!--              </AvatarDropdown>-->
            <!--              <div class="absolute right-0 bottom-0 w-2 h-2 bg-green-500 rounded-full ring-1 ring-base-200 ring-offset-1"></div>-->
            <!--            </div>-->
            <!--          </li>-->
          </ul>
        </li>
        <li v-else>
          <button class="px-6 py-1.5 bg-cyan-500 font-bold text-sm text-white rounded-full hover:bg-opacity-75" @click="emit('search','login')">登录</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>