import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //change to false when project is in production
  strict: false,
  state: {
    page: "",
    beers: [],
    url: `https://api.punkapi.com/v2/beers?`,
    search: "",
    searchedBeers: [],
    searchClick: false,
    sort: "",
    filter: "",
  },
  getters: {
    getBeers: (state) => state.beers,
    getPage: (state) => state.page,
    getSearch: (state) => state.search,
    getSearchClick: (state) => state.searchClick,
    getSort: (state) => state.sort,
    getFilter: (state) => state.filter,
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
    changeSearchClick(state, click) {
      state.searchClick = click;
    },
    updateSort(state, payload) {
      state.sort = payload;
    },
    updateFilter(state, payload) {
      state.filter = payload;
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
        const jsonBeers = json
          .map((beer) => {
            return {
              id: beer.id,
              name: beer.name,
              description: beer.description,
              abv: beer.abv,
              ibu: beer.ibu == null ? 0 : beer.ibu,
              image_url: beer.image_url,
            };
          })
          .sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          );
        context.commit("getBeers", jsonBeers);
        context.commit("getPage", endpoint.page);
      } else {
        alert(data.status);
      }
    },
  },
  modules: {},
});
