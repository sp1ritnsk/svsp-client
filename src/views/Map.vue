<template>
  <v-main>
    <v-container fluid fill-height pa-0 ma-0>
      <v-layout>
        <v-flex>
          <Map />
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import Map from "../components/Map.vue";

export default {
  name: "MapView",
  components: {
    Map
  }
};
</script>

<style lang="scss">
html {
  overflow-y: hidden;
}
</style>
