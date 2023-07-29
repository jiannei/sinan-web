<script setup lang="ts">
interface IProps {
  filters: Array<any>
}
defineProps<IProps>()
</script>

<template>
  <div class="flex items-center justify-between">
    <ul class="flex items-center space-x-1.5">
      <li v-for="item in filters"
          :class="{'font-medium text-cyan-500 bg-normal': item.active,'text-base-content/75':!item.active}"
          class="relative px-2 py-0.5 rounded-lg text-sm cursor-pointer hover:bg-normal hover:text-cyan-500 hover:font-medium"
      >
        <a :href="item.value">{{ item.label }}</a>
      </li>
    </ul>
    <div class="space-x-2">
      <button title="过滤" class="i-tabler-filter hover:text-cyan-500"/>
    </div>
  </div>
</template>

<style scoped>

</style>