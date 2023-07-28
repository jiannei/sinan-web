// https://stackoverflow.com/questions/66384268/how-to-use-component-is-in-vue-3-script-setup
export default function useComponent(components: any, component: string) {
  return components[component];
}