import useApi from "~/composables/useApi";

export default defineEventHandler(async (event) => {
  const api = useApi()

  return await api('/page')
})