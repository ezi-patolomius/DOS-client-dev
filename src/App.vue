<script setup lang="ts">
import { useLocalizationStore } from "@modules/localization/store";
import { storeToRefs } from "pinia";
import { Toaster } from "@steveyuowo/vue-hot-toast";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";

const { locale } = useI18n({ useScope: "global" });
const { selected_locale } = storeToRefs(useLocalizationStore());

onMounted(() => {
  locale.value = selected_locale.value.i18n;
});
</script>
<template>
  <Toaster />
  <router-view></router-view>
</template>
