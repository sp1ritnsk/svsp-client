<template>
  <v-app>
    <div class="navbar">
      <v-app-bar>
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
          Вход/Регистрация
        </v-btn>
      </v-app-bar>
    </div>

    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
    user() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.logout().catch(error => {
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
  z-index: 3;
}
</style>
