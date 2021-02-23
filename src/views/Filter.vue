<template>
  <div class="container">
    <FiltersTemplate name="Filter by"></FiltersTemplate>
    <b-list-group class="mt-5">
      <b-list-group-item variant="secondary" class="border border-none p-3 m-1">
        <div class="d-flex">
          AVB
          <b-form-group class="ml-4" label="" v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="selected1"
              :aria-describedby="ariaDescribedby"
              name="some-radio"
              value="lt"
              inline
              >Less than</b-form-radio
            >
            <b-form-radio
              v-model="selected1"
              :aria-describedby="ariaDescribedby"
              name="some-radio"
              value="gt"
              inline
              >Greater than</b-form-radio
            >
          </b-form-group>
        </div>
        <vue-slider
          v-model="value1"
          :process="false"
          :enable-cross="false"
          :tooltip="'always'"
          :tooltip-placement="['bottom', 'top']"
          :min="4"
          :max="54"
        ></vue-slider>
      </b-list-group-item>
      <b-list-group-item variant="secondary" class="border border-none p-3 m-1"
        ><div class="d-flex">
          IBU
          <b-form-group class="ml-4" label="" v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="selected2"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="lt"
              inline
              >Less than</b-form-radio
            >
            <b-form-radio
              v-model="selected2"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="gt"
              inline
              >Greater than</b-form-radio
            >
          </b-form-group>
        </div>
        <vue-slider
          v-model="value2"
          :process="false"
          :enable-cross="false"
          :tooltip="'always'"
          :tooltip-placement="['bottom', 'top']"
          :max="150"
        ></vue-slider>
      </b-list-group-item>
    </b-list-group>
    <button
      type="button"
      class="btn btn-block btn-secondary mt-3"
      @click="save"
    >
      Save!
    </button>
    <button type="button" class="btn btn-block btn-info mt-3" @click="reset">
      Reset
    </button>
  </div>
</template>
<script>
import FiltersTemplate from "@/components/FiltersTemplate.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    FiltersTemplate,
  },
  data: function() {
    return {
      value1: 4,
      value2: 0,
      selected1: "lt",
      selected2: "lt",
    };
  },
  computed: {
    ...mapGetters(["getFilter"]),
  },
  methods: {
    save: function() {
      let filter = `&abv_${this.selected1}=${this.value1}&ibu_${this.selected2}=${this.value2}`;
      this.$store.commit("updateFilter", filter);
      this.$router.push("/");
    },
    reset: function() {
      this.$store.commit("updateFilter", "");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.vue-slider {
  margin: 20px 0px;
}
</style>
