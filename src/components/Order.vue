<template>
  <v-form
    ref="form"
    @submit.prevent="
      order(
        firstname,
        lastname,
        bin,
        iin,
        region,
        district,
        city,
        address,
        phone,
        plan,
        begin_date,
        company
      )
    "
  >
    <v-container>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-text>
              <v-list-item-title>
                <h3>{{ selectedFeatures[0].properties.DS_name }}</h3>
              </v-list-item-title>
              <v-list-item-title>
                <h3>{{ selectedFeatures[0].properties.Adress }}</h3>
              </v-list-item-title>
              <v-list-item-title>
                <h3>
                  Модель приемника:
                  {{ selectedFeatures[0].properties.Receiver_M }}
                </h3>
              </v-list-item-title>
              <v-list-item-title>
                <h3>
                  Модель антенны:
                  {{ selectedFeatures[0].properties.Antenna_mo }}
                </h3>
              </v-list-item-title>
              <v-list-item-title>
                <h3>
                  Точка подключения:
                  {{ selectedFeatures[0].properties.Mount_poin }}
                </h3>
              </v-list-item-title>
              <v-list-item-title>
                <h3>
                  Координаты: {{ selectedFeatures[0].geometry.coordinates }}
                </h3>
              </v-list-item-title>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link dark to="/signin">Войдите</router-link> для создания
          подписки
        </v-col>
      </v-row>
      <v-row v-if="user">
        <v-col>
          <v-card flat>
            <v-card-text>
              <v-text-field ref="firstname" v-model="firstname" label="Имя">
              </v-text-field>
              <v-text-field ref="lastname" v-model="lastname" label="Фамилия">
              </v-text-field>
              <v-text-field
                ref="company"
                v-model="company"
                label="Наименование компании"
              >
              </v-text-field>
              <v-text-field ref="bin" v-model="bin" label="БИН"> </v-text-field>
              <v-text-field ref="iin" v-model="iin" label="ИИН"> </v-text-field>
              <v-text-field
                ref="region"
                v-model="region"
                label="Регион или область"
              >
              </v-text-field>
              <v-text-field ref="district" v-model="district" label="Район">
              </v-text-field>
              <v-text-field
                ref="city"
                v-model="city"
                label="Город или населеный пункт"
              >
              </v-text-field>
              <v-text-field ref="address" v-model="address" label="Адрес">
              </v-text-field>
              <v-text-field ref="phone" v-model="phone" label="Телефон">
              </v-text-field>
              <v-text-field
                ref="begin_date"
                v-model="begin_date"
                label="Телефон"
              >
              </v-text-field>
              <v-select
                label="План подписки"
                v-model="plan"
                :items="products"
              ></v-select>
              <v-btn color="blue" dark type="submit">Отправить запрос</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data: () => ({
    company: undefined,
    firstname: undefined,
    lastname: undefined,
    bin: undefined,
    iin: undefined,
    region: undefined,
    district: undefined,
    city: undefined,
    address: undefined,
    phone: undefined,
    plan: undefined,
    begin_date: undefined,
    products: [
      "RTK 1 месяц",
      "RTK 3 месяца",
      "RTK 6 месяцев",
      "RTK 12 месяцев",
      "PP Extended",
      "RTK test 1 день"
    ]
  }),
  methods: {
    order(
      firstname,
      lastname,
      bin,
      iin,
      region,
      district,
      city,
      address,
      phone,
      plan,
      begin_date,
      company
    ) {
      this.createOrder({
        user: this.user,
        firstname,
        lastname,
        bin,
        iin,
        region,
        district,
        city,
        address,
        phone,
        plan,
        begin_date,
        company
      }).then(response => {
        console.log(response);
      });
    },
    ...mapActions("orders", {
      createOrder: "create"
    })
  },
  computed: {
    ...mapState(["selectedFeatures"]),
    ...mapState("auth", ["user"])
  }
};
</script>
