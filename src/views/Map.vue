<template>
  <v-container fluid fill-height pa-0 ma-0>
    <v-layout>
      <v-flex>
        <Map />
      </v-flex>
    </v-layout>
    <v-navigation-drawer
      clipped
      absolute
      width="400"
      right
      hide-overlay
      stateless
      :value="isFeaturesSelected"
      @transitionend="cancelOrder"
    >
      <div v-if="!isOrderCreating">
        <StationsInfo />
      </div>
      <v-container v-if="!isOrderCreating">
        <v-row>
          <v-col>
            <v-card flat v-if="!user && !isOrderCreating">
              <v-card-text class="py-0">
                <div class="py-0">
                  Для подачи заявки необходимо войти в аккаунт или
                  зарегистрироваться
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" to="/signin">Войти</v-btn>
              </v-card-actions>
            </v-card>
            <v-card flat v-if="user && !isOrderCreating">
              <v-card-text class="py-0">
                <div class="py-0">
                  Подайте заявку для подключения к выбранным станциям
                </div>
              </v-card-text>
              <v-card-actions>
                <v-row align="center" justify="space-around" class="pb-4">
                  <v-btn
                    @click="isOrderCreating = !isOrderCreating"
                    color="primary"
                    >Подать заявку</v-btn
                  >
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <Order
        v-if="isOrderCreating"
        @cancelOrder="isOrderCreating = !isOrderCreating"
      />
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import Map from "../components/Map.vue";
import Order from "../components/Order.vue";
import StationsInfo from "../components/StationsInfo";
import { mapState, mapGetters } from "vuex";

export default {
  name: "MapView",
  data: () => ({
    drawer: true,
    isOrderCreating: false
  }),
  methods: {
    cancelOrder() {
      console.log(this.isOrderCreating);
      this.isOrderCreating = !this.isOrderCreating;
    }
  },
  components: {
    Map,
    Order,
    StationsInfo
  },
  computed: {
    // ...mapState(['selectedFeatures']),
    ...mapGetters(["isFeaturesSelected"]),
    ...mapState("auth", ["user"]),
    selectedFeatures: {
      get() {
        return this.$store.state.selectedFeatures;
      },
      set() {
        this.$store.commit("setSelectedFeatures", []);
      }
    }
  }
};
</script>

<style lang="scss">
html {
  overflow-y: hidden;
}
</style>
