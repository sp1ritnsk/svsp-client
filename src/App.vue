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
        <v-btn dark to="/signup" color="indigo">
          Вход/Регистрация
        </v-btn>
      </v-app-bar>
    </div>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
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
