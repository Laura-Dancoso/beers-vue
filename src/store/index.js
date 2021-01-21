import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: [],
    page: 1,
    url: `https://api.punkapi.com/v2/beers?page=`,
  },
  getters: {
    getBeers: (state) => state.beers,
    getPage: (state) => state.page,
    getUrl: (state) => state.url,
  },
  mutations: {
    getBeers: function(state, beers) {
      state.beers = beers;
    },
  },
  actions: {
    getData: async function({ commit }, url) {
      const data = await fetch(url);
      if (data.ok) {
        const json = await data.json();
        const jsonBeers = json.map((beer) => {
          return {
            id: beer.id,
            name: beer.name,
            description: beer.description,
            abv: beer.abv,
            ibu: beer.ibu,
            image_url: beer.image_url,
          };
        });
        commit("getBeers", jsonBeers);
      } else {
        alert(data.status);
      }
    },
  },
  modules: {},
});
