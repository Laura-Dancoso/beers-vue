<template>
  <div class="home">
    <ul>
      <li v-for="(beer, index) in getBeers" :key="index">
        {{ beer.id }} - {{ beer.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["getPage", "getUrl", "getBeers"]),
  },
  methods: {
    ...mapActions(["getData"]),
  },

  created() {
    this.getData(this.getUrl + this.getPage);
  },
};
</script>
