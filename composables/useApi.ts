// https://github.com/nuxt/nuxt/discussions/15930
export default function () {
  const config = useRuntimeConfig()

  return $fetch.create({baseURL: config.public.apiBase})
}