import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: "",
    beers: [],
    url: `https://api.punkapi.com/v2/beers?`,
  },
  getters: {
    getBeers: (state) => state.beers,
    getPage: (state) => state.page,
  },
  mutations: {
    getBeers: function(state, beers) {
      state.beers = beers;
    },
    getPage: function(state, page) {
      state.page = page;
    },
  },
  actions: {
    getData: async function(context, endpoint) {
      const url =
        endpoint.filter === ""
          ? `${context.state.url}page=${endpoint.page}`
          : `${context.state.url}${endpoint.filter}&page=${endpoint.page}`;
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
        context.commit("getBeers", jsonBeers);
        context.commit("getPage", endpoint.page);
      } else {
        alert(data.status);
      }
    },
  },
  modules: {},
});
