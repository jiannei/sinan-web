<script setup lang="ts">
interface IProps {
  title: string,
  data: any
}

defineProps<IProps>()
</script>

<template>
  <div class="w-full bg-light rounded shadow-sm">
    <div class="px-4 py-3">
      <span class="font-bold">{{ title }}</span>
    </div>
    <div class="px-4 py-3 text-sm">
      <p class="mb-3">
        {{ data.desc }}
      </p>
      <ul class="flex flex-col space-y-1">
        <li v-for="link in data.links">
          <button class="block w-full py-1" :class="{'bg-cyan-500 text-white font-bold rounded-full hover:bg-opacity-75' :link.type === 'primary','border border-cyan-500 text-cyan-500 font-bold rounded-full hover:bg-normal':link.type === 'outline'}">
            <a :href="link.url">{{ link.label }}</a>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
