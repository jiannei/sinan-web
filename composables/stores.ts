interface ITheme {
  nodes: Array<any>
}

interface IPageAside {
  reverse: boolean
}

interface IPage {
  filters?: Array<any>,
  aside: IPageAside,
  infinite: boolean,
  components: Array<any>
}

export const useStore = defineStore('default', () => {
  const theme = ref<ITheme>()
  const page = ref<IPage>()

  return {theme, page}
})