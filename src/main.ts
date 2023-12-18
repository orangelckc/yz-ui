import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import 'virtual:uno.css'
import App from './App.vue'
import router from './routers/index'
import '@unocss/reset/tailwind.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

const store = createPinia().use(piniaPluginPersistedstate)

app.use(store).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
