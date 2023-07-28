<script setup lang="ts">
interface IProps {
  title: string,
  data: any
}

defineProps<IProps>()
</script>

<template>
  <div class="w-full bg-base-100 rounded shadow-sm">
    <div class="px-4 py-3">
      <span class="font-bold">{{ title }}</span>
    </div>
    <div class="px-4 py-3 text-sm">
      <p class="mb-3">
        {{ data.desc }}
      </p>
      <ul class="flex flex-col space-y-1">
        <li v-for="link in data.links">
          <Link :href="link.url"
                as="button" type="button"
                class="block w-full py-1"
                :class="{'bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-400' :link.type === 'primary','border border-cyan-500 text-cyan-500 font-bold rounded-full hover:bg-cyan-50':link.type === 'outline'}">
            {{ link.label }}
          </Link>
        </li>
      </ul>
    </div>
  </div>
</template>
