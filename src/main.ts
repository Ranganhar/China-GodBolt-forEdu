// https://unocss.dev/ 原子 css 库
import '@unocss/reset/tailwind-compat.css' // unocss reset
import 'virtual:uno.css'
import 'virtual:unocss-devtools'

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

// 你自定义的 css
import './styles/main.css'

import Chat from './libs/vue-beautiful-chat/esm.js'

import App from './App.vue'
const app = createApp(App)
app.use(Chat)

app.component('Splitpanes', Splitpanes)
app.component('Pane', Pane)
app.mount('#app')
