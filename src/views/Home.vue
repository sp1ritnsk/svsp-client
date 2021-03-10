<template>
  <v-container fluid class="pa-0">
    <v-parallax
      id="top"
      src="../assets/images/background-1920.jpg"
      height="680"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="_heading-1 font-weight-thin mb-4 text-uppercase">
            Система высокоточного спутникового позиционирования
          </h1>
          <h3 class="subtitle-1 _heading-3 mx-auto mb-8">
            СВСП является крупнейшей сетью референцных станций на территории
            Республики Казахстан. Мы предоставляем услуги корректирующей
            информации во всех городах республиканского значения, областных
            центрах и крупных населенных пунктах.
          </h3>
          <v-btn class="mx-1" color="white" to="/about">Подробнее</v-btn>
          <v-btn class="mx-1" color="primary" to="/map">Показать карту</v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Services start here -->

    <v-container fluid>
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <h2 class="text-h3 font-weight-light pb-6 pt-8">Услуги</h2>
          </v-col>
        </v-row>
        <v-row justify="center" align="stretch" class="pb-12">
          <v-col v-for="(item, i) in services" :key="i" cols="12" md="4">
            <v-card
              class="mx-auto fill-height align-center d-flex flex-column"
              max-width="344"
              flat
            >
              <v-img
                :src="item.img"
                height="150px"
                max-height="150px"
                contain
              ></v-img>

              <v-card-title class="pt-6">
                {{ item.title }}
              </v-card-title>

              <v-card-text class="align-center text-center">
                {{ item.subtitle }}
              </v-card-text>

              <v-card-actions class="mt-auto">
                <v-btn color="primary" text to="/map">
                  Подробнее
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- About info starts here -->

    <v-container fluid class="grey lighten-4">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <h2 class="text-h3 font-weight-light pb-2 pt-8">О нас</h2>
          </v-col>
        </v-row>
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              veritatis, ab repellat quod unde ipsam voluptates facilis aliquam
              sunt, officiis assumenda ratione non, quis itaque et asperiores
              inventore aut placeat!
            </p>
          </v-col>
          <v-col cols="12" md="7">
            <v-img
              src="../assets/images/map.png"
              max-height="500px"
              contain
              class="pa-0"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- KPIs start here -->

    <v-container fluid class="_dark">
      <v-container>
        <v-row align="center" justify="center">
          <v-col
            class="text-center"
            v-for="(item, i) in kpi"
            :key="i"
            cols="6"
            md="3"
          >
            <v-card
              flat
              class="mx-auto fill-height align-center d-flex flex-column"
              color="transparent"
              dark
            >
              <v-card-title class="text-h3 font-weight-light">
                {{ item.value }}
              </v-card-title>
              <v-card-subtitle>
                {{ item.title }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Clients start here -->

    <v-container fluid class="grey lighten-4">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <h2 class="text-h3 font-weight-light pb-6 pt-8">Наши клиенты</h2>
          </v-col>
        </v-row>
        <v-row class="pb-4" align="start" justify="space-between">
          <v-col v-for="(item, i) in clients" :key="i" cols="6" md="2">
            <v-img
              :src="item.url"
              height="100px"
              max-height="100px"
              max-width="200px"
              contain
              class="_clients_img"
              :title="item.title"
              :alt="item.title"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Contacts start here -->

    <v-container fluid>
      <v-container>
        <v-row justify="space-around">
          <v-col cols="12" md="5">
            <v-card flat>
              <v-card-title>
                Контактная информация
              </v-card-title>
              <v-card-text>
                <p>
                  РГП на ПХВ "Национальный центр геодезии и пространственной
                  информации"
                </p>
                <p>
                  <v-icon color="primary" left>mdi-map-marker</v-icon>
                  проспект Кабанбай батыра 19, блок А, 11 этаж, кабинет 1104
                </p>
                <p>
                  <v-icon color="primary" left>mdi-phone</v-icon> +7 (7132) 246
                  887
                </p>
                <p>
                  <v-icon color="primary" left>mdi-cellphone</v-icon> +7 (777)
                  163 72 32
                </p>
                <p>
                  <v-icon color="primary" left>mdi-email</v-icon>
                  sales@qgeo.kz
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card flat>
              <v-card-title>
                Напишите нам
              </v-card-title>
              <v-card-text>
                <form action="sendMessage">
                  <v-text-field
                    outlined
                    v-model="feedback.name"
                    label="Ваше имя"
                    dense
                  ></v-text-field>
                  <v-text-field
                    outlined
                    v-model="feedback.email"
                    label="Ваш email"
                    dense
                  ></v-text-field>
                  <v-textarea
                    label="Ваше сообщение"
                    outlined
                    v-model="feedback.message"
                    dense
                  ></v-textarea>
                  <v-btn type="submit" color="primary">Отправить</v-btn>
                </form>
              </v-card-text>
              <v-card-text> </v-card-text>
            </v-card>
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
        img: require("../assets/images/gps.png"),
        title: "RTK поправки",
        subtitle:
          "Услуги по предоставлению поправок ГНСС измерений в режиме реального времени для повышения точности",
        show: false
      },
      {
        img: require("../assets/images/venue.png"),
        title: "RINEX данные",
        subtitle:
          "Предоставление RINEX данных для проведения постобработки геодезических измерений.",
        show: false
      },
      {
        img: require("../assets/images/validity.png"),
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
      },
      {
        url: require("../assets/images/car-logo.png"),
        title: 'Car sharing company"'
      },
      {
        url: require("../assets/images/logo-farm.png"),
        title: 'Smart Farm LTD"'
      },
      {
        url: require("../assets/images/logo-signal.png"),
        title: 'Satellite company"'
      }
    ],
    kpi: [
      {
        title: "Установленных станций",
        value: "60"
      },
      {
        title: "Количество клиентов",
        value: "238"
      },
      {
        title: "Поверенных приборов",
        value: "139"
      },
      {
        title: "Время безотказной работы",
        value: "99.9%"
      }
    ],
    feedback: {
      name: "",
      email: "",
      message: ""
    }
  }),
  name: "Home",
  components: {}
};
</script>

<style lang="scss">
._clients_img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
._clients {
  background: #f3f3f3;
}

._dark {
  background: #022d4f;
}

._heading-3 {
  max-width: 800px;
}
#top .v-parallax__content {
  background: rgba(0, 0, 0, 0.4);
}
</style>
