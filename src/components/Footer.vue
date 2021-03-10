<template>
  <v-footer padless color="#022D4F" dark>
    <v-container class="pt-8">
      <v-row justify="space-around">
        <v-col cols="5" md="3">
          <div class="font-weight-regular grey--text text--lighten-2 pl-4">
            Ссылки
          </div>
          <v-list link color="transparent" dense flat class="pt-2 pb-6">
            <v-list-item
              v-for="(item, i) in links"
              :key="i"
              :to="item.url"
              class="py-0 _min-height-0 "
            >
              <v-list-item-content
                class="font-weight-regular text-caption py-0 grey--text  "
              >
                {{ item.title }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-spacer></v-spacer>

        <v-col cols="7" md="5">
          <div class="font-weight-regular grey--text text--lighten-2">
            Контакты
          </div>
          <v-card flat class="transparent pl-0">
            <v-card-text
              class="pl-0 pt-2 text-caption font-weight-regular grey--text"
            >
              <p class="mb-2">
                <v-icon small color="primary" left>mdi-map-marker</v-icon>
                проспект Кабанбай батыра 19, блок А, <br />
                11 этаж, кабинет 1104
              </p>
              <p class="mb-2">
                <v-icon small color="primary" left>mdi-phone</v-icon> +7 (7132)
                246 887
              </p>
              <p class="mb-2">
                <v-icon small color="primary" left>mdi-cellphone</v-icon>
                +7 (777) 163 72 32
              </p>
              <p class="mb-2">
                <v-icon small color="primary" left>mdi-email</v-icon>
                sales@qgeo.kz
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="7" md="3">
          <div class="font-weight-regular grey--text text--lighten-2">
            Социальные сети
          </div>
          <v-card flat tile class="transparent pl-0">
            <v-card-text class="pl-0 pt-2 ">
              <v-btn icon small text v-for="(item, i) in social" :key="i">
                <v-icon small>
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" class="mb-0 mt-2 ">
          <p class="font-weight-light text-caption grey--text lighten-2 mb-1">
            &copy; РГП &#171;Национальный центр геодезии и пространственной
            информации&#187;
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    links: [
      {
        url: "/",
        title: "Главная"
      },
      {
        url: "/map",
        title: "Карта сети"
      },
      {
        url: "/about",
        title: "О нас"
      },
      {
        url: "/instructions",
        title: "Инструкции"
      },
      {
        url: "/plans",
        title: "Тарифные планы"
      }
    ],
    social: [
      {
        url: "",
        icon: "mdi-facebook"
      },
      {
        url: "",
        icon: "mdi-twitter"
      },
      {
        url: "",
        icon: "mdi-instagram"
      },
      {
        url: "",
        icon: "mdi-vk"
      },
      {
        url: "",
        icon: "mdi-telegram"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
a {
  min-height: 24px !important;
}
</style>
