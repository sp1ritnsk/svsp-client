<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          {{ selectedFeatures }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["selectedFeatures"])
  }
};
</script>
