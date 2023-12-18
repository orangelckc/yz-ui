import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'

export const request = createAlova({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  beforeRequest({ config }) {
    // 假设我们需要添加token到请求头
    config.headers.token = ''
  },
  async responded(response) {
    if (response.status !== 200) {
      // 这边抛出错误时，将会进入请求失败拦截器内
      throw new Error(response.statusText)
    }

    return response.json()
  },
})
