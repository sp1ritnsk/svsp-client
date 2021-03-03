<template>
  <v-app>
    <!--    Info_section-->
    <section>
      <v-parallax height="400">
        <v-layout column align-center justify-center class="white--text">
          <h1
            class="black--text mb-2 display-1 text-xs-center"
            style="font-weight: 900;"
          >
            Система высокоточного спутникого позиционирования
          </h1>
          <div
            class="black--text subheading mb-3 text-xs-center"
            style="font-weight: 900;"
          >
            СВСП являеться крупнейшей сетью референцных станций на террирории
            Республики Казахстан.
          </div>
          <div
            class="black--text subheading mb-3 text-xs-center"
            style="font-weight: 900;"
          >
            Мы предоставляем услуги корректирующей информации во всех областных
            центрах и городах республиканского значения,
          </div>
          <div
            class="black--text subheading mb-3 text-xs-center"
            style="font-weight: 900;"
          >
            а также в наиболее крупных населеных пунктах Республики Казахстан.
          </div>
          <v-btn dark to="/map" color="indigo">Карта</v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <!--    End_of_info_section-->
    <!--    Services_section-->
    <section>
      <v-container grid-list-xl>
        <h1 class="black--text mb-1 display-1 text-center">Услуги</h1>
        <v-layout row wrap justify-center class="my-5">
          <!--      first_card-->
          <v-flex xs12 sm2>
            <v-card max-width="300">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
              <v-card-title primary-title class="layout justify-center">
                RTK
              </v-card-title>
              <v-card-subtitle class="layout justify-center">
                Real time kinematic
              </v-card-subtitle>
              <v-card-actions>
                <v-btn left color="indigo" text class="layout justify-center">
                  Подробнее
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-flex>
          <!--      second_card-->
          <v-flex xs12 sm2 offset-sm2>
            <v-card max-width="300">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
              <v-card-title primary-title class="layout justify-center">
                RINEX
              </v-card-title>
              <v-card-subtitle class="layout justify-center">
                Receiver Independent Exchange Format
              </v-card-subtitle>
              <v-card-actions>
                <v-btn left color="indigo" text class="layout justify-center">
                  Подробнее
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-flex>
          <!--      third_card-->
          <v-flex xs12 sm2 offset-sm2>
            <v-card max-width="300">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
              <v-card-title primary-title class="layout justify-center">
                Поверка
              </v-card-title>
              <v-card-subtitle class="layout justify-center">
                Поверка средств измерений
              </v-card-subtitle>
              <v-card-actions>
                <v-btn left color="indigo" text class="layout justify-center">
                  Подробнее
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <!--    End_of_services_section-->
    <!--    clients_section-->
    <section>
      <v-container grid-list-xl>
        <h1 class="black--text mb-1 display-1 text-center">Наши клиенты</h1>
        <v-layout row wrap justify-center class="my-8">
          <v-flex offset-sm1>
            <v-card class="" max-width="200">
              <v-img
                src="https://polycomm.kz/img/logo.png"
                height="200px"
                style="max-width: 100%;"
              ></v-img>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="rounded-circle" max-width="200">
              <v-img
                src="https://gov4c.kz/public/img/logo.png"
                height="200px"
              ></v-img>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="rounded-circle" max-width="200" height="200">
              <h1 style="padding-top: 80px" class="mb-1 display-1 text-center">
                AS PROJECT
              </h1>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="rounded-circle" max-width="200" height="200">
              <h1 style="padding-top: 55px" class="mb-1 display-1 text-center">
                ТОО "Петрозем"
              </h1>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="rounded-circle" max-width="200" height="200">
              <h1 style="padding-top: 80px" class="mb-1 display-1 text-center">
                TOO Nur-Esil
              </h1>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <!--    end_of_clients-->
    <!--    Indicators_section-->
    <section>
      <v-container grid-list-xl>
        <h1 class="black--text mb-1 display-1 text-center">Наши показатели</h1>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm2>
            <h1 class="black--text mb-1 display-1 text-center">UPTIME</h1>
            <h1
              style="font-size: 4em; padding-top: 40px"
              class="text-center mb-1"
            >
              99.9%
            </h1>
          </v-flex>
          <v-flex xs12 sm2 offset-sm2>
            <h1 class="black--text mb-1 display-1 text-center">
              Колличество станций
            </h1>
            <h1 style="font-size: 4em;" class="text-center mb-1">60</h1>
          </v-flex>
          <v-flex xs12 sm2 offset-sm2>
            <h1 class="black--text mb-1 display-1 text-center">
              Колличество клиентов
            </h1>
            <h1 style="font-size: 4em;" class="text-center mb-1">30</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  name: "Home",
  components: {}
};
</script>

<style></style>
