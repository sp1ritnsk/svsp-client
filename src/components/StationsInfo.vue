<template>
  <v-container>
    <div class="text-h6 pb-2">Выбранные станции</div>
    <v-row v-for="(station, i) in selectedFeatures" :key="i" class="pb-0">
      <v-col class="pb-0">
        <v-card outlined>
          <v-card-title class="py-2 d-flex justify-space-between">
            <span>{{ station.properties.DS_name }}</span>

            <span class="body-2">Код: {{ station.properties.Code }}</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <span class="font-weight-bold">Адрес:</span>
            {{ station.properties.Adress }} <br />
            <span class="font-weight-bold">Модель приемника:</span>
            {{ station.properties.Receiver_M }} <br />
            <span class="font-weight-bold">Модель антенны:</span>
            {{ station.properties.Antenna_mo }} <br />
            <span class="font-weight-bold">Точка подключения:</span>
            {{ station.properties.Mount_poin }} <br />
            <span class="font-weight-bold">Координаты:</span>
            {{ station.geometry.coordinates }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StationsInfo",
  computed: {
    ...mapState(["selectedFeatures"])
  }
};
</script>
