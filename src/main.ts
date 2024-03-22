import { createApp } from "vue";
import router from "@router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

// USED TAILWIND CSS
import "@/main.css";

import en from "@/lib/locales/en.json";
import my from "@/lib/locales/my.json";
import zhChs from "@/lib/locales/zh-chs.json";
import zhCht from "@/lib/locales/zh-cht.json";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages: { en, my, "zh-chs": zhChs, "zh-cht": zhCht },
});

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(i18n);
app.use(autoAnimatePlugin);
app.use(pinia);
app.use(router);
app.mount("#app");
