<script setup lang="ts">
import {FunnelIcon} from '@heroicons/vue/24/outline'
interface IProps {
  filters: Array<any>
}
defineProps<IProps>()
</script>

<template>
  <div class="flex items-center justify-between">
    <ul class="flex items-center space-x-1.5">
      <li v-for="item in filters"
          :class="{'font-medium text-cyan-500 bg-base-200': item.active,'text-base-content/75':!item.active}"
          class="relative px-2 py-0.5 rounded-lg text-sm cursor-pointer hover:bg-base-200 hover:text-cyan-500 hover:font-medium"
      >
        <a :href="item.value">{{ item.label }}</a>
      </li>
    </ul>
    <div class="space-x-2">
      <button title="过滤">
        <FunnelIcon class="h-4 w-4 stroke-gray-500 hover:stroke-cyan-500"/>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>