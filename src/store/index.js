import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //change to false when project is in production
  strict: true,
  state: {
    page: "",
    beers: [],
    url: `https://api.punkapi.com/v2/beers?`,
    search: "",
    searchedBeers: [],
  },
  getters: {
    getBeers: (state) => state.beers,
    getPage: (state) => state.page,
    getSearch: (state) => state.search,
  },
  mutations: {
    getBeers: function(state, payload) {
      state.beers = payload;
    },
    getPage: function(state, payload) {
      state.page = payload;
    },
    updateSearch(state, search) {
      state.search = search;
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
            name:
              beer.name.length > 23
                ? beer.name.slice(0, 23) + "..."
                : beer.name,
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
