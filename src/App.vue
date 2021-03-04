<template>
  <v-app>
    <v-navigation-drawer
      permanent
      app
      clipped
      v-if="['AccountView', 'ProfileView'].includes($route.name)"
    >
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-list-item two-line v-if="user">
          <v-list-item-content class="pb-0">
            <v-list-item-title class="title">
              {{ user.firstname }} {{ user.lastname }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ user.email }}
            </v-list-item-subtitle>
            <div class="text-left">
              <v-btn
                text
                class="ml-0"
                x-small
                color="primary"
                @click.prevent="logOut()"
                rounded
                outlined
                >Выход</v-btn
              >
              <v-chip
                class="ma-2"
                color="red"
                dark
                x-small
                v-if="user.role === 'admin'"
              >
                Администратор
              </v-chip>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item link to="/account" exact>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Подписки
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/account/profile" exact>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Профиль
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left class="navbar">
      <v-img
        contain
        max-height="40"
        max-width="50"
        src="./assets/logo.png"
      ></v-img>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          Система высокоточного спутникого позиционирования
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn plain to="/">
          Главная
        </v-btn>
        <v-btn plain to="/map">
          Карта сети
        </v-btn>
        <v-menu open-on-hover offset-y rounded="0" class="elevation-0">
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on">
              Информация
            </v-btn>
          </template>

          <v-list>
            <v-list-item to="/about">
              <v-list-item-title>О нас</v-list-item-title>
            </v-list-item>
            <v-list-item to="/instructions">
              <v-list-item-title>Инструкции</v-list-item-title>
            </v-list-item>
            <v-list-item to="/faq">
              <v-list-item-title>Вопрос/ответ</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn plain to="/plans">
          Цены
        </v-btn>
      </v-toolbar-items>
      <v-btn color="primary" to="/account" v-if="user">
        Аккаунт
      </v-btn>
      <v-btn v-if="!user" dark to="/signin" color="indigo">
        Вход
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
    ...mapState("auth", ["user"])
  },
  methods: {
    clearForm(e) {
      console.log("Form closed");
    },
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
    ...mapActions("auth", ["authenticate", "logout"])
  },
  mounted() {
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
  z-index: 50;
}
</style>
