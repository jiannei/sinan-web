<script setup lang="ts">
import Node from '@/components/aside/right/Node.vue';
import Announcement from '@/components/aside/right/Announcement.vue';

interface IComponents {
  title: string,
  data: Array<any>,
  actions: Array<any>
}

interface IProps {
  components: IComponents
}

defineProps<IProps>()

const definedComponents = {
  Announcement,
  Node,
}
</script>

<template>
  <component v-for="item in components" :is="useComponent(definedComponents,item.component)" :actions="item.actions" :data="item.data" :title="item.title"/>
</template>

<style scoped>

</style>