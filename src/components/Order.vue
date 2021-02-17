<template>
  <v-form
    ref="form"
    @submit.prevent="
      order(
        name,
        surname,
        loginNTRIP,
        passwordNTRIP,
        bin,
        iin,
        region,
        district,
        city,
        address,
        phone,
        plan
      )
    "
  >
    <v-container>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-text>
              <v-list-item-title>
                <h4>{{ selectedFeatures[0].properties.DS_name }}</h4>
              </v-list-item-title>
              <v-list-item-title>
                <h4>{{ selectedFeatures[0].properties.Adress }}</h4>
              </v-list-item-title>
              <v-list-item-title>
                <h4>
                  Модель приемника:
                  {{ selectedFeatures[0].properties.Receiver_M }}
                </h4>
              </v-list-item-title>
              <v-list-item-title>
                <h4>
                  Модель антенны:
                  {{ selectedFeatures[0].properties.Antenna_mo }}
                </h4>
              </v-list-item-title>
              <v-list-item-title>
                <h4>
                  Точка подключения:
                  {{ selectedFeatures[0].properties.Mount_poin }}
                </h4>
              </v-list-item-title>
              <v-list-item-title>
                <h4>
                  Координаты: {{ selectedFeatures[0].geometry.coordinates }}
                </h4>
              </v-list-item-title>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-text>
              <v-text-field ref="name" v-model="name" label="Имя">
              </v-text-field>
              <v-text-field ref="surname" v-model="surname" label="Фамилия">
              </v-text-field>
              <v-text-field
                ref="loginNTRIP"
                v-model="loginNTRIP"
                label="Логин NTRIP"
              >
              </v-text-field>
              <v-text-field
                ref="passwordNTRIP"
                v-model="passwordNTRIP"
                label="Пароль NTRIP"
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
              <v-select
                label="План подписки"
                v-model="plan"
                :items="products"
              ></v-select>
              <v-btn type="submit">создать подписку</v-btn>
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
    name: undefined,
    surname: undefined,
    loginNTRIP: undefined,
    passwordNTRIP: undefined,
    bin: undefined,
    iin: undefined,
    region: undefined,
    district: undefined,
    city: undefined,
    address: undefined,
    phone: undefined,
    plan: undefined
  }),
  methods: {
    order(
      name,
      surname,
      loginNTRIP,
      passwordNTRIP,
      bin,
      iin,
      region,
      district,
      city,
      address,
      phone,
      plan
    ) {
      this.createOrder({
        name,
        surname,
        loginNTRIP,
        passwordNTRIP,
        bin,
        iin,
        region,
        district,
        city,
        address,
        phone,
        plan
      }).then(response => {
        console.log(response);
      });
    },
    ...mapActions("order", {
      createOrder: "create"
    })
  },
  computed: {
    ...mapState(["selectedFeatures"])
  }
};
</script>
