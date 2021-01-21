<template>
  <div class="home">
    <b-container class="p-0 m-0" fluid>
      <Navbar></Navbar>
    </b-container>
    <div
      :class="[
        { largePadding: $mq == 'mobile', smallPadding: $mq != 'mobile' },
      ]"
    ></div>
    <ul>
      <li v-for="(beer, index) in getBeers" :key="index">
        {{ beer.id }} - {{ beer.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Navbar,
  },
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
<style lang="scss">
.smallPadding {
  padding-top: 60px;
}
.largePadding {
  padding-top: 100px;
}
</style>
