<template>
  <div class="home">
    <b-container class="p-0 m-0" fluid>
      <Navbar></Navbar>
      <h5
        :class="[
          'text-center',
          { largePadding: $mq == 'mobile', smallPadding: $mq != 'mobile' },
        ]"
        v-if="filterSearchedBeers.length === 0"
      >
        No se encontraron resultados para {{ getSearch }}
      </h5>
      <h5
        :class="[
          'text-center',
          { largePadding: $mq == 'mobile', smallPadding: $mq != 'mobile' },
        ]"
        v-if="
          getSearchClick &&
            filterSearchedBeers.length > 0 &&
            getSearch.length > 0
        "
      >
        Estos son los resultados para {{ getSearch }}
      </h5>
      <b-row
        :class="[
          {
            largePadding: $mq == 'mobile',
            smallPadding: $mq != 'mobile',
            'pt-1': getSearchClick && getSearch.length > 0,
          },
          'm-0',
        ]"
        ><b-col
          class="box"
          cols="12"
          md="6"
          lg="4"
          v-for="(beer, index) in filterSearchedBeers"
          :key="index"
        >
          <Card :url="beer.image_url" :beer="beer"></Card> </b-col
      ></b-row>
    </b-container>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Navbar,
    Card,
  },
  computed: {
    ...mapGetters(["getBeers", "getPage", "getSearch", "getSearchClick"]),
    filterSearchedBeers() {
      return this.getBeers.filter((b) =>
        b.name.toLowerCase().includes(this.getSearch)
      );
    },
  },
  methods: {
    ...mapActions(["getData"]),
  },

  created() {
    this.getData({ filter: "", page: 1 });
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
.card {
  img {
    height: 20vh;
  }
  max-width: 450px;
  border-radius: 20px !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  .card-body {
    padding-bottom: 0;
    width: 85%;
  }
  .card-title {
  }
}
.bottom {
  position: absolute;
  bottom: 0;
}
.container .card-body {
  min-width: 200px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
