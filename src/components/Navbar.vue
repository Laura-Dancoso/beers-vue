<template>
  <div class="fixed-top">
    <b-navbar
      class="pl-0 pr-2 mx-0 row d-flex justify-content-around align-items-center"
      type="light"
      variant="light"
    >
      <div>
        <b-navbar-brand
          class="p-0 ml-1 text-secondary"
          to="/"
          @click="scrollToTop"
          exact
        >
          <img
            class="img-fluid pb-1"
            src="../assets/beer.png"
            alt="beer"
            width="20px"
            max-width="100%"
            height="auto"
          />
          Beers
        </b-navbar-brand>
      </div>
      <div class="flex-grow-1">
        <b-form-input
          v-model="search"
          @input="checkSearchClickValue"
          trim
          variant="secondary"
          type="search"
          placeholder="Search a beer"
          autofocus
          v-on:keyup.enter="
            if (search.length > 0) $store.commit('changeSearchClick', true);
          "
        >
        </b-form-input>
      </div>
      <div v-if="$mq != 'mobile'"><NavbarFilter></NavbarFilter></div>
    </b-navbar>
    <b-navbar
      v-if="$mq == 'mobile'"
      class="px-0 mx-0 p-0 row border-top  d-flex justify-content-around"
      type="light"
      variant="light"
      sticky
    >
      <NavbarFilter></NavbarFilter>
    </b-navbar>
  </div>
</template>
<script>
import NavbarFilter from "@/components/NavbarFilter.vue";
export default {
  name: "Navbar",
  components: {
    NavbarFilter,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    checkSearchClickValue() {
      if (this.$store.getters.getSearch == "")
        this.$store.commit("changeSearchClick", false);
    },
    enter() {
      this.$store.commit("updateSearch", "");
    },
  },
  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("updateSearch", value);
      },
    },
  },
};
</script>
