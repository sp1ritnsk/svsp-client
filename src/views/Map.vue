<template>
  <v-main>
    <v-container fluid fill-height pa-0 ma-0>
      <v-layout>
        <v-flex>
          <Map />
        </v-flex>
      </v-layout>
    </v-container>
    <v-navigation-drawer
      v-if="selectedFeatures.length > 0"
      absolute
      width="600"
      right
      v-model="drawer"
    >
      <Order />
    </v-navigation-drawer>
  </v-main>
</template>

<script>
import Map from "../components/Map.vue";
import Order from "../components/Order.vue";
import { mapState } from "vuex";

export default {
  name: "MapView",
  data: () => ({
    drawer: true
  }),
  components: {
    Map,
    Order
  },
  computed: {
    ...mapState(["selectedFeatures"])
  }
};
</script>

<style lang="scss">
html {
  overflow-y: hidden;
}
</style>
