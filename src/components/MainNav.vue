<script setup lang="ts">
import { useCurrentTime } from "@composables/useClock";
import LanguageSwitcher from "@components/LanguageSwitcher.vue";
import { ref, watch } from "vue";

const { currentTime } = useCurrentTime();
const show_clock = ref<boolean>(false);

watch(
  () => currentTime.value,
  (value) => {
    let clockLength = value.toString().length;
    if (clockLength > 20) show_clock.value = false;
    else show_clock.value = true;
  },
  { immediate: true }
);
</script>
<template>
  <nav
    class="w-full h-[77px] max-h-[77px] bg-primary py-3.5 px-5 md:px-10 xl:px-[120px] flex justify-center items-center"
  >
    <div class="flex items-center justify-between w-full h-full">
      <a href="/">
        <img
          src="@assets/images/DOS-logo.png"
          width="89"
          height="26"
          alt="DOS logo"
        />
      </a>

      <div class="inline-flex items-center justify-center gap-8">
        <div class="inline-flex items-center justify-center gap-4">
          <h1
            v-if="show_clock"
            class="text-clock font-normal text-xs leading-[12.27px] font-rethink-sans tracking-[-0.03em]"
          >
            {{ currentTime }} (UTC)
          </h1>

          <div
            v-else
            class="relative w-[150px] min-h-[20px] max-h-[20px] h-full bg-gray-50 bg-opacity-20 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-[#646464] before:to-transparent rounded-2xl shadow overflow-hidden"
          ></div>
          <LanguageSwitcher />
        </div>
        <div class="w-[2px] bg-secondary/50 min-h-[48px]"></div>
        <div class="inline-flex items-center justify-center gap-4">
          <div
            class="w-full max-w-[170px] h-full max-h-[44px] inline-flex gap-1 items-start border border-[#163041] py-2.5 px-8 rounded-xl"
          >
            <span
              class="font-medium text-sm leading-5 font-rethink-sans text-[#E7FFFC]"
              >RM</span
            >
            <span
              class="font-bold text-lg leading-[18px] font-rethink-sans text-[#008EBB]"
              >47,101.00</span
            >
          </div>
          <button
            class="p-1 transition-all rounded-full hover:bg-secondary active:scale-95"
          >
            <img src="@assets/svg/logout.svg" alt="logout icon" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
