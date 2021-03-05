<template>
  <v-container fluid class="pa-0">
    <v-parallax
      dark
      src="../assets/images/background-parallax.jpg"
      height="680"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class=" font-weight-thin mb-4 text-uppercase">
            Система высокоточного спутникого позиционирования
          </h1>
          <h3 class="subtitle-1 __heading mx-auto">
            СВСП является крупнейшей сетью референцных станций на территории
            Республики Казахстан. Мы предоставляем услуги корректирующей
            информации во всех городах республиканского значения, областных
            центрах и крупных населенных пунктах.
          </h3>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container fluid>
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <h2 class="text-h4 font-weight-medium my-2">Услуги</h2>
          </v-col>
        </v-row>
        <v-row justify="center" align="stretch" class="pb-6">
          <v-col v-for="(item, i) in services" :key="i" cols="12" md="4">
            <v-card
              class="mx-auto fill-height align-center d-flex flex-column"
              max-width="344"
              elevation="6"
            >
              <v-img :src="item.img" height="200px" max-height="200px"></v-img>

              <v-card-title>
                {{ item.title }}
              </v-card-title>

              <v-card-text class="align-center">
                {{ item.subtitle }}
              </v-card-text>

              <v-card-actions class="mt-auto">
                <v-btn color="orange lighten-2" text to="/map">
                  Заказать
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container fluid class="blue-grey lighten-5">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <h2 class="text-h4 font-weight-medium my-2">Наши клиенты</h2>
          </v-col>
        </v-row>
        <v-row class="pb-6">
          <v-col v-for="(item, i) in clients" :key="i">
            <v-img
              :src="item.url"
              height="128px"
              max-height="128px"
              contain
              :title="item.title"
              :alt="item.title"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container fluid>
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <h2 class="text-h4 font-weight-medium my-2">Контакты</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    services: [
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "RTK поправки",
        subtitle:
          "Услуги по предоставлению поправок ГНСС измерений в режиме реального времени для повышения точности",
        show: false
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "RINEX данные",
        subtitle:
          "Предоставление RINEX данных для проведения постобработки геодезических измерений.",
        show: false
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        title: "Поверка ГНСС оборудования",
        subtitle:
          "Услуги по проведению поверки любого ГНСС оборудования с выдачей сертификатов.",
        show: false
      }
    ],
    clients: [
      {
        url: require("../assets/images/nao.png"),
        title: 'НАО ГК "Правительство для граждан"'
      },
      {
        url: require("../assets/images/polycom.png"),
        title: 'ТОО "PolyComm"'
      }
    ]
  }),
  name: "Home",
  components: {}
};
</script>

<style>
.__heading {
  max-width: 600px;
}
</style>
