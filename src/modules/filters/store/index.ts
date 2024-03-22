import { defineStore } from "pinia";

export type GameFiltersDTO = {
  img_src: string;
  filter: string;
};

type GameFiltersStoreState = {
  game_filters: GameFiltersDTO[];
  selected_game_filter: GameFiltersDTO;
};

export const useGameFiltersStore = defineStore("gameFiltersStore", {
  state: (): GameFiltersStoreState => ({
    game_filters: [
      { img_src: "/filters/icon-top-games.png", filter: "Top Games" },
      { img_src: "/filters/icon-all-games.png", filter: "All Games" },
      { img_src: "/filters/icon-slot-games.png", filter: "Slot Games" },
      { img_src: "/filters/icon-live-games.png", filter: "Live Games" },
      {
        img_src: "/filters/icon-progressive-games.png",
        filter: "Progressive Games",
      },
    ],
    selected_game_filter: {
      img_src: "/filters/icon-top-games.png",
      filter: "Top Games",
    },
  }),
  getters: {},
  actions: {},
  persist: true,
});
