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
      width="256"
      hide-overlay
      right
      absolute
      v-model="drawer"
      clipped
      app
    >
      <Order />
    </v-navigation-drawer>
  </v-main>
</template>

<script>
import Map from "../components/Map.vue";
import Order from "../components/Order.vue";

export default {
  name: "MapView",
  data: () => ({
    drawer: true
  }),
  components: {
    Map,
    Order
  }
};
</script>

<style lang="scss">
html {
  overflow-y: hidden;
}
</style>
