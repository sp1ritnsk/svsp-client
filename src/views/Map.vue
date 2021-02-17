<template>
  <v-main>
    <v-container fluid fill-height pa-0 ma-0>
      <v-layout>
        <v-flex>
          <Map />
        </v-flex>
      </v-layout>
    </v-container>
    <v-navigation-drawer absolute width="600" right v-model="drawer">
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
