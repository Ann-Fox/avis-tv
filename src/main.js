import './assets/main.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import globalComponents from "@/components/global";

import UInput from "@/components/global/UInput.vue";

const app = createApp(App)

app.use(globalComponents);

// app.component('UInput', UInput)

app.mount('#app')
