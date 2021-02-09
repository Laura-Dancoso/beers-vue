<template>
  <div class="container">
    <FiltersTemplate name="Sort by"></FiltersTemplate>
    <b-list-group class="mt-5">
      <b-list-group-item
        variant="secondary"
        class="border border-none p-3 m-1"
        button
        @click="sort('abv', true)"
        >Less ABV</b-list-group-item
      >
      <b-list-group-item
        variant="secondary"
        class="border border-none p-3 m-1"
        button
        @click="sort('abv', false)"
        >More ABV</b-list-group-item
      >
      <b-list-group-item
        variant="secondary"
        class="border border-none p-3 m-1"
        button
        @click="sort('ibu', true)"
        >Less IBU</b-list-group-item
      >
      <b-list-group-item
        variant="secondary"
        class="border border-none p-3 m-1"
        button
        @click="sort('ibu', false)"
        >More IBU</b-list-group-item
      >
    </b-list-group>
  </div>
</template>
<script>
import FiltersTemplate from "@/components/FiltersTemplate.vue";
export default {
  components: {
    FiltersTemplate,
  },
  methods: {
    sort: function(by, asc) {
      this.$store.commit("updateSort", { by: by, asc: asc });
      this.$router.push("/");
    },
  },
};
</script>
