export default defineEventHandler(async (event) => {
    return await $fetch('http://localhost:3030/page')
})