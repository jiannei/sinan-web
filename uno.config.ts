import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-light':'bg-white dark:bg-slate-800 ring-1 ring-slate-900/5',
    'bg-normal':'bg-slate-50 dark:bg-slate-900',
    'text-light':'text-slate-500 dark:text-slate-400',
    'text-normal':'text-slate-600 dark:text-slate-50',
    'divide-light':'divide-slate-100 dark:divide-slate-700',
    'badge':'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
  },
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    // presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})