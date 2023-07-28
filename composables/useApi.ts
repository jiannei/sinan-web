// https://github.com/nuxt/nuxt/discussions/15930

type IResponse = {
  status: string,
  code: number,
  data: any,// 数组、对象
  error: any
}

export default function () {
  const {public: {apiBase}} = useRuntimeConfig()

  return (url: string, opts?: any) => {
    return useFetch(url, {
      baseURL: apiBase,
      transform: (response) => (response as IResponse).data,
      onRequest({request, options}) {
        // Set the request headers

      },
      onRequestError({request, options, error}) {
        // Handle the request errors
      },
      onResponse({request, response, options}) {
        // Process the response data
        //localStorage.setItem('token', response._data.token)
      },
      onResponseError({request, response, options}) {
        // Handle the response errors
      },
    })


    // return useAsyncData(url, () => $fetch(`${apiBase}${url}`, opts), {
    //   transform: (response) => {
    //     return (response as IResponse).data
    //   }
    // })
  }
}