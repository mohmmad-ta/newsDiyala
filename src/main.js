import './assets/main.css'
import "../axios/axios";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AR from "../locale/ar.json"
import EN from "../locale/en.json"

import App from './App.vue'
import router from './router'
import {createI18n} from "vue-i18n";

const app = createApp(App)
const i18n = createI18n({
    locale: 'ar',
    messages: {
        ar: AR,
        en: EN,
    }
})
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
