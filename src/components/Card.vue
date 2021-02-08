<template lang="">
  <div>
    <b-card
      :img-src="url"
      img-alt="Beer image"
      img-left
      img-width="15%"
      class="p-2 pl-4 mx-auto my-1"
    >
      <b-container>
        <b-card-body class="p-0">
          <b-card-title class="h6 font-weight-bold m-0 text-left">{{
            beer.name
          }}</b-card-title>
        </b-card-body>
        <b-list-group flush class="text-left mt-3">
          <b-list-group-item class="h6 font-weight-light pl-0 py-2 m-0"
            >{{ beer.abv }}% ABV</b-list-group-item
          >
          <b-list-group-item class="h6 font-weight-light pl-0 py-2 m-0"
            >{{ beer.ibu }} IBU</b-list-group-item
          >
        </b-list-group>
      </b-container>
    </b-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Card",
  props: ["url", "beer"],
  computed: {
    ...mapGetters(["getSearch"]),
  },
};
</script>
