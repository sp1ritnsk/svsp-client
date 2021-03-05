<template>
  <v-app>
    <section>
      <h1 style="font-size: 3em;" class="text-center mb-1">
        Инструкции по настройки RTK режимов в ГНСС приемниках
      </h1>
      <v-layout row wrap justify-center class="my-5">
        <v-flex xs12 sm2>
          <v-card
            link
            href="src/assets/instructions/setup_leica.pdf"
            max-width="400"
          >
            <img src="http://svsn.kz/static/images/Leica_gs08.jpg" />
            <a class="text-center display-1"
              >Инструкция по настройке оборудования Leica CS10 и CS15 | PDF</a
            >
          </v-card>
        </v-flex>
        <v-flex xs12 sm2 offset-sm1>
          <v-card
            link
            href="src/assets/instructions/setup_trimble.pdf"
            max-width="400"
          >
            <img src="http://svsn.kz/static/images/Trimble_TSC3_logo.jpg" />
            <a class="text-center display-1"
              >Инструкция по настройке оборудования Trimble TSC3 | PDF</a
            >
          </v-card>
        </v-flex>
        <v-flex xs12 sm2 offset-sm1>
          <v-card
            link
            href="src/assets/instructions/setup_stonex.pdf"
            max-width="400"
          >
            <img src="http://svsn.kz/static/images/stonex4.jpg" />
            <a class="text-center display-1"
              >Инструкция по настройке оборудования Stonex | PDF</a
            >
          </v-card>
        </v-flex>
        <v-flex xs12 sm2 offset-sm1>
          <v-card
            link
            href="src/assets/instructions/setup_CHСnav.pdf"
            max-width="400"
          >
            <img src="http://svsn.kz/static/images/CHCNav.jpg" />
            <a class="text-center display-1"
              >Инструкция по настройке оборудования CHСnav | PDF</a
            >
          </v-card>
        </v-flex>
        <h1 style="font-size: 3em;" class="text-center mb-1">
          Инструкции по установке параметров преобразования между различными СК
        </h1>
        <v-flex xs12 sm2>
          <v-card
            link
            href="src/assets/instructions/setup_trimble_cs.pdf"
            max-width="400"
          >
            <img src="http://svsn.kz/static/images/Leica_gs08.jpg" />
            <a class="text-center display-1"
              >Инструкция по установке СК на оборудования Trimble TSC3 | PDF</a
            >
          </v-card>
        </v-flex>
      </v-layout>
    </section>
  </v-app>
</template>

<style lang="scss">
img {
  padding-left: 70px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
