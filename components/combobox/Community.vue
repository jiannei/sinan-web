<script setup>
import {computed, ref, watch} from 'vue'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot,
} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/24/solid'
import {KeyboardIcon} from 'vue-tabler-icons';

const props = defineProps({
  options: {
    type: Array,
    default: []
  }
})

const {options} = props

let selected = ref(options[0])// todo
let query = ref('')

let filteredOptions = computed(() =>
    query.value === ''
        ? options
        : options.filter((option) =>
            option.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)

watch(selected, (val) => {

})

function getSelected() {
  return selected.value.id;
}

defineExpose({getSelected});
</script>

<template>
  <Combobox v-model="selected" v-slot="{open}">
    <div class="relative">
      <div class="w-full flex items-center space-x-1 cursor-default text-left sm:text-sm">
        <KeyboardIcon v-if="selected.id === 1" class="w-8 h-8 stroke-base-content/75"/>
        <img v-else :alt="selected.name" :src="selected.properties.icon" class="w-8 h-8">
        <div class="flex-1 flex items-center">
          <ComboboxButton>
            <ComboboxInput
                spellcheck="false"
                class="flex-1 px-1.5 bg-light text-sm leading-5 font-medium ring-0 border-none outline-none cursor-pointer"
                :displayValue="(option) => option.properties.label"
                @change="query = $event.target.value"
            />
          </ComboboxButton>
          <ChevronDownIcon aria-hidden="true" class="h-5 w-5 fill-base-300"/>
        </div>
      </div>

      <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
      >
        <ComboboxOptions
            class="absolute z-10 mt-2.5 max-h-60 w-full overflow-auto rounded-md bg-light py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <div
              v-if="filteredOptions.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-base-content/75"
          >
            Nothing found.
          </div>

          <ComboboxOption
              v-for="option in filteredOptions"
              as="template"
              :key="option.id"
              :value="option"
              v-slot="{ selected, active }"
          >
            <li
                :class="{'bg-normal': active,'text-base-content': !active,}"
                class="relative cursor-pointer select-none p-2 flex items-center space-x-2"
            >
              <KeyboardIcon v-if="option.id === 1" class="w-5 h-5 stroke-base-content/75"></KeyboardIcon>
              <img v-else :alt="option.name" :src="option.properties.icon" class="w-5 h-5">
              <span :class="{ 'font-medium': selected, 'font-normal': !selected }"
                    class="block">{{ option.properties.label }}</span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
</template>

<style scoped>

</style>
