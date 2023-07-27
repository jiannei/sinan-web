// https://github.com/nuxt/nuxt/discussions/15930
export default function () {
  let {public: {apiBase}} = useRuntimeConfig()

  apiBase = apiBase.endsWith('/') ? apiBase.slice(0, -1) : apiBase

  return (url: string, opts?: object) => {
    return useAsyncData(url, () => $fetch(`${apiBase}${url}`, opts))
  }
}