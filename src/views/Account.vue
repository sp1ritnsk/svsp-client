<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title v-if="user">
            Вы вошли как: {{ user.email }}
          </v-card-title>
          <v-card-title v-if="user"> Подписки: {{ orders }} </v-card-title>
          <v-card-text>
            <v-btn v-if="user" dark @click="logOut()" color="indigo">
              Выход
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    // data
  }),
  computed: {
    ...mapState("auth", ["user"]),
    ...mapGetters(["orders"])
    // user() {
    //   return this.$store.state.auth.user
    // }
  },
  methods: {
    logOut() {
      this.logout().catch(error => {
        console.log(error);
      });
    },
    ...mapActions("auth", ["logout"])
  }
};
</script>
