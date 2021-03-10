<template>
  <v-container class="pa-0" fluid>
    <v-row align="stretch">
      <v-col cols="12">
        <Map />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from "../components/Map.vue";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "MapView",
  data: () => ({}),
  methods: {
    ...mapActions(["clearSelectedFeatures"])
  },
  components: {
    Map
  },
  computed: {},
  beforeRouteLeave: function(to, from, next) {
    this.$store.dispatch("clearSelectedFeatures");
    next();
  }
};
</script>

<style lang="scss">
html {
  overflow-y: auto;
}
</style>
