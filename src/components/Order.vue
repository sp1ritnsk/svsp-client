<template>
  <v-form v-if="user" ref="form" @submit.prevent="submitOrder()">
    <v-card flat>
      <v-card-title class="pb-3">
        <div class="text-h6">Подача заявки</div>
      </v-card-title>
      <v-card-text>
        <v-select
          label="Станции"
          :items.sync="stations"
          v-model="selectedFeatures"
          dense
          outlined
          multiple
          item-text="properties.DS_name"
          return-object
        ></v-select>
        <v-text-field
          outlined
          dense
          ref="region"
          v-model="region"
          label="Регион или область"
        >
        </v-text-field>
        <v-text-field
          outlined
          dense
          ref="district"
          v-model="district"
          label="Район"
        >
        </v-text-field>
        <v-text-field
          outlined
          dense
          ref="city"
          v-model="city"
          label="Город или населеный пункт"
        >
        </v-text-field>
        <v-text-field
          outlined
          dense
          ref="address"
          v-model="address"
          label="Адрес"
        >
        </v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="begin_date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="begin_date"
              label="Дата начала подписки"
              append-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              outlined
              dense
            ></v-text-field>
          </template>
          <v-date-picker v-model="begin_date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">
              Отмена
            </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(begin_date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-select
          dense
          outlined
          label="План подписки"
          v-model="plan"
          :items="plans"
        ></v-select>
        <v-row class="px-0" align="center" justify="space-around">
          <v-btn class="mx-0" color="primary" dark type="submit"
            >Отправить заявку</v-btn
          >
          <v-btn class="mx-0" color="grey-lighten-1" @click="cancelOrder"
            >Отмена</v-btn
          >
        </v-row>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data: () => ({
    menu: false,
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
    plans: [
      "RTK 1 месяц",
      "RTK 3 месяца",
      "RTK 6 месяцев",
      "RTK 12 месяцев",
      "PP Extended",
      "RTK Test 1 день"
    ],
    statuses: [
      { status: "new", alias: "Новая" },
      { status: "pending", alias: "На рассмотрении" },
      { status: "payment", alias: "Ожидает оплаты" },
      { status: "active", alias: "Активная" }
    ]
  }),
  props: {
    isOrderCreating: Boolean
  },
  methods: {
    cancelOrder() {
      this.$emit("cancelOrder");
    },
    stationNames(arr) {
      return arr.map(val => {
        return val.properties.DS_name;
      });
    },
    submitOrder() {
      let stationNames = this.stationNames(this.selectedFeatures);
      // console.log(this.user)
      this.createOrder({
        stations: stationNames,
        user: this.user,
        // firstname: this.firstname,
        // lastname: this.lastname,
        // bin: this.bin,
        // iin: this.iin,
        region: this.region,
        district: this.district || "не указан",
        city: this.city,
        address: this.address,
        // phone: this.phone,
        plan: this.plan,
        begin_date: this.begin_date,
        // company: this.company,
        status: "new"
      })
        .then(() => {
          this.$router.push("/account");
        })
        .catch(err => {
          console.log(err);
        });
    },
    ...mapActions("orders", {
      createOrder: "create"
    })
  },
  computed: {
    // ...mapState(['selectedFeatures']),
    ...mapState("auth", ["user"]),
    ...mapState(["stations", "selectedFeatures"]),
    selectedFeatures: {
      get() {
        return this.$store.state.selectedFeatures;
      },
      set(features) {
        this.$store.commit("setSelectedFeatures", features);
      }
    }
  }
};
</script>
