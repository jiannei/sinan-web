<script setup lang="ts">
import Community from '~/components/layout/aside/right/Community.vue';
import Notice from '~/components/layout/aside/right/Notice.vue';

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
  Community,
  Notice,
}
</script>

<template>
  <component v-for="item in components" :is="useComponent(definedComponents,item.component)" :actions="item.actions" :data="item.data" :title="item.title"/>
</template>

<style scoped>

</style>