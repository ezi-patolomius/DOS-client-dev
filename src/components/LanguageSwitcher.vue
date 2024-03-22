<script setup lang="ts">
import {
  useLocalizationStore,
  LocalizationDTO,
} from "@modules/localization/store";
import { storeToRefs } from "pinia";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });

const { locales, selected_locale } = storeToRefs(useLocalizationStore());
const open_locales = ref<boolean>(false);
const localeSwitcherRef = ref<HTMLDivElement>();

function selectLocale(locale_: LocalizationDTO) {
  selected_locale.value = locale_;
  open_locales.value = false;
  locale.value = locale_.i18n;
}

function handleOutsideLocaleDivClick(event: any) {
  if (
    localeSwitcherRef.value &&
    !localeSwitcherRef.value.contains(event.target)
  ) {
    if (open_locales.value) open_locales.value = false;
  }
}

onMounted(() => {
  document.body.addEventListener("click", handleOutsideLocaleDivClick);
});

onBeforeUnmount(() => {
  document.body.removeEventListener("click", handleOutsideLocaleDivClick);
});
</script>

<template>
  <div class="relative select-none" ref="localeSwitcherRef">
    <div
      @mousedown="open_locales = !open_locales"
      class="inline-flex items-center justify-center bg-secondary rounded-[10px] p-2.5 relative w-full min-w-[102px] max-w-[102px] cursor-pointer"
    >
      <span class="inline-flex justify-center items-center gap-1.5">
        <img :src="selected_locale.img_src" alt="ms-my" />

        <h5
          class="text-white font-normal text-xs leading-[12.27px] font-rethink-sans tracking-[-0.03em] text-nowrap"
        >
          {{ selected_locale.country_code }}
        </h5>

        <img
          src="@assets/svg/arrow-down.svg"
          alt="country arrow down"
          class="transition-all"
          :class="open_locales && 'rotate-180'"
        />
      </span>
    </div>

    <div
      v-if="open_locales"
      class="absolute top-[130%] flex flex-col items-start w-full min-w-[102px] max-w-[102px] bg-secondary overflow-hidden rounded-[10px] border border-[#163041] z-50"
    >
      <span
        v-for="(item, index) in locales"
        :key="item.country_code + index"
        class="inline-flex items-center justify-start py-1.5 gap-1.5 px-2.5 w-full cursor-pointer hover:bg-primary transition-all"
        @mousedown="selectLocale(item)"
      >
        <img :src="item.img_src" :alt="item.country_code" />

        <h5
          class="text-white font-normal text-xs leading-[12.27px] font-rethink-sans tracking-[-0.03em]"
        >
          {{ item.country_code }}
        </h5>
      </span>
    </div>
  </div>
</template>
