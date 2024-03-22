import { defineStore } from "pinia";

export type LocalizationDTO = {
  img_src: string;
  country_code: string;
  i18n: string;
};

type LocalizationStoreState = {
  locales: LocalizationDTO[];
  selected_locale: LocalizationDTO;
};

export const useLocalizationStore = defineStore("localizationStore", {
  state: (): LocalizationStoreState => ({
    locales: [
      { img_src: "/flags/en-us.png", country_code: "EN-US", i18n: "en" },
      { img_src: "/flags/zh-chs.png", country_code: "ZH-CHS", i18n: "zh-chs" },
      { img_src: "/flags/zh-cht.png", country_code: "ZH-CHT", i18n: "zh-cht" },
      { img_src: "/flags/ms-my.png", country_code: "MS-MY", i18n: "my" },
    ],
    selected_locale: {
      img_src: "/flags/en-us.png",
      country_code: "EN-US",
      i18n: "en",
    },
  }),
  getters: {},
  actions: {},
  persist: true,
});
