<script setup lang="ts">
import { useGameFiltersStore } from "@modules/filters/store";
import { storeToRefs } from "pinia";

const { game_filters } = storeToRefs(useGameFiltersStore());
</script>

<template>
  <nav
    class="w-full h-full max-h-[68px] bg-secondary flex justify-between items-center py-2 px-5 md:px-10 xl:px-[120px]"
  >
    <div class="inline-flex items-center">
      <div
        class="py-2.5 px-5 h-full max-h-[52px] inline-flex items-center cursor-pointer transition-all hover:bg-[#4AA553]/50 rounded active:scale-95"
        v-for="(item, index) in game_filters"
        :key="item.filter + index"
      >
        <img :src="item.img_src" :alt="item.filter" />
        <span
          class="text-[#E7FFFC] font-normal text-sm leading-[18.23px] font-rethink-sans"
          >{{ $t(item.filter) }}</span
        >
      </div>
    </div>

    <div class="w-full max-w-[261px] relative">
      <input
        type="text"
        :placeholder="$t('Search Games')"
        class="pl-5 pr-12 bg-secondary py-2.5 border-b border-[#163041] text-[#E7FFFC] placeholder:text-[#E7FFFC] focus:outline-none font-normal text-sm leading-[18.23px] font-rethink-sans w-full"
      />
      <img
        src="@assets/svg/search-white.svg"
        alt="search icon"
        class="absolute transform -translate-y-1/2 right-5 top-1/2"
      />
    </div>
  </nav>
</template>
