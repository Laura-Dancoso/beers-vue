<template lang="">
  <div>
    <!-- ver: https://bootstrap-vue.org/docs/components/card#horizontal-card-layout -->
    <b-card
      :img-src="url"
      img-alt="Beer image"
      img-left
      img-width="15%"
      class="p-2 pl-4 mx-auto my-1"
    >
      <b-card-body class="p-0">
        <b-card-title class="text-left m-0">{{ beer.name }}</b-card-title>
      </b-card-body>
      <b-list-group flush class="bottom pb-2">
        <b-list-group-item class="px-0 font-weight-bold"
          >{{ beer.abv }}% ABV</b-list-group-item
        >
        <b-list-group-item class="px-0 font-weight-bold"
          >{{ beer.ibu }} IBU</b-list-group-item
        >
      </b-list-group>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["url", "beer"],
};
</script>
