<script setup lang="ts">
import {
  BellIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
  BuildingLibraryIcon
} from '@heroicons/vue/24/outline'
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
        <li>
          <button type="button" title="搜索" class="p-1.5 rounded-full hover:bg-normal outline-none" @click="emit('search','')">
            <MagnifyingGlassIcon class="w-4 h-4 stroke-base-content/75 hover:stroke-cyan-500"/>
          </button>
        </li>
        <li>
         <button type="button" title="趋势" class="p-1.5 rounded-full hover:bg-normal outline-none">
           <ArrowTrendingUpIcon class="w-4 h-4 stroke-base-content/75 hover:stroke-cyan-500"/>
         </button>
        </li>
        <li>
          <button type="button" title="探索" class="p-1.5 rounded-full hover:bg-normal outline-none">
            <GlobeAltIcon class="w-4 h-4 stroke-base-content/75 hover:stroke-cyan-500"/>
          </button>
        </li>
        <li>
          <button type="button" title="资源库" class="p-1.5 rounded-full hover:bg-normal outline-none">
            <BuildingLibraryIcon class="w-4 h-4 stroke-base-content/75 hover:stroke-cyan-500"/>
          </button>
        </li>
        <li v-if="auth">
          <ul class="flex items-center justify-end space-x-1.5">
            <li>
              <button type="button" title="创作" class="p-1.5 rounded-full hover:bg-normal outline-none">
                <ChatBubbleLeftRightIcon class="w-4 h-4 stroke-base-content/75 hover:stroke-cyan-500"/>
              </button>
            </li>
            <li>
              <button type="button" title="讨论" class="p-1.5 rounded-full hover:bg-normal outline-none">
                <PencilSquareIcon class="w-4 h-4 stroke-base-content/75 hover:stroke-cyan-500"/>
              </button>
            </li>
            <li>
              <button type="button" title="消息" class="p-1.5 rounded-full hover:bg-normal outline-none">
                <BellIcon class="w-4 h-4 stroke-base-content/75 hover:stroke-cyan-500"/>
              </button>
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