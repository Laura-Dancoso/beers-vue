<template>
  <div class="fixed-top">
    <b-navbar
      class="pl-0 pr-2 mx-0 row d-flex justify-content-around align-items-center"
      type="light"
      variant="light"
    >
      <div>
        <b-navbar-brand class="p-0 ml-1" to="/" exact>
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
          v-model="inputSearch"
          type="search"
          placeholder="Search........"
          autofocus
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
  data() {
    return {
      inputSearch: "",
    };
  },
};
</script>
