<template>
  <v-app>
    <v-navigation-drawer
      class="hidden"
      app
      bottom
      v-model="drawer"
      disable-resize-watcher
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in topMenu" :key="i">
            <v-btn text block :to="item.url">
              {{ item.title }}
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      app
      clipped
      right
      hide-overlay
      stateless
      :value="isFeaturesSelected"
      @transitionend="cancelOrder"
      class="hidden"
      width="320px"
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
                <v-row align="center" justify="space-around" class="pb-4 pt-2">
                  <v-btn color="primary" to="/signin">Войти</v-btn>
                </v-row>
              </v-card-actions>
            </v-card>
            <v-card flat v-if="user && !isOrderCreating">
              <v-card-text class="py-0">
                <div class="py-0">
                  Подайте заявку для подключения к выбранным станциям
                </div>
              </v-card-text>
              <v-card-actions>
                <v-row align="center" justify="space-around" class="pb-4 pt-2">
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

    <v-app-bar app clipped-left clipped-right class="navbar">
      <v-app-bar-nav-icon
        v-if="['AccountView', 'ProfileView'].includes($route.name)"
        class="hidden-md-and-up"
        @click.stop="toggleDrawer"
      ></v-app-bar-nav-icon>
      <v-img
        contain
        max-height="40"
        max-width="50"
        src="./assets/logo.png"
      ></v-img>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          СВСП
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in topMenu" :key="i" plain :to="item.url">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-btn color="primary" to="/account" v-if="user">
        Аккаунт
      </v-btn>
      <v-btn v-if="!user" dark to="/signin" color="primary">
        Вход
      </v-btn>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer
      v-if="!['MapView', 'AccountView', 'ProfileView'].includes($route.name)"
    />
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Footer from "./components/Footer";
import Order from "./components/Order.vue";
import StationsInfo from "./components/StationsInfo";

export default {
  name: "App",

  components: {
    Footer,
    Order,
    StationsInfo
  },

  data: () => ({
    drawer: false,
    accountDrawer: true,
    isOrderCreating: false,
    topMenu: [
      {
        url: "/",
        title: "Главная"
      },
      {
        url: "/about",
        title: "О нас"
      },
      {
        url: "/map",
        title: "Карта сети"
      },
      {
        url: "/instructions",
        title: "Инструкции"
      },
      {
        url: "/plans",
        title: "Цены"
      }
    ]
  }),
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
    ...mapState("auth", ["user"]),
    ...mapState("auth", ["user"]),
    ...mapGetters(["isFeaturesSelected"]),
    ...mapGetters("orders", { findOrdersInStore: "find" }),
    selectedFeatures: {
      get() {
        return this.$store.state.selectedFeatures;
      },
      set() {
        this.$store.commit("setSelectedFeatures", []);
      }
    },
    orders() {
      return this.findOrdersInStore({
        query: {
          $sort: { createdAt: -1 }
        }
      });
    }
  },
  methods: {
    ...mapActions("auth", ["authenticate", "logout"]),
    ...mapActions(["toggleDrawer"]),
    // clearForm(e) {
    // 	console.log('Form closed')
    // },
    logOut() {
      this.logout()
        .then(() => {
          this.$router.push("/");
          setTimeout(() => {
            window.location.reload();
          }, 20);
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancelOrder() {
      this.isOrderCreating = !this.isOrderCreating;
    }
  },
  mounted: function() {
    this.$store.dispatch("auth/authenticate").catch(error => {
      if (!error.message.includes("Could not find stored JWT")) {
        console.log("Could not find stored JWT");
      }
    });
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

.navbar {
  z-index: 5;
}
</style>
