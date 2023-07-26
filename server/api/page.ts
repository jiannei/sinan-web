export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  return await $fetch('/page', {baseURL: config.public.apiBase})
})