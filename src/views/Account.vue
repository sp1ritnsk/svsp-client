<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title v-if="user">
            Вы вошли как: {{ user.email }}
          </v-card-title>
          <!-- <v-card-title v-if="user"> Подписки: {{ orders }} </v-card-title> -->
          <v-card-text>
            <v-list>
              <v-list-item v-for="(order, i) in orders.data" :key="i">
                {{ order.user }} | {{ order.plan }} |
                {{ order.createdAt }}</v-list-item
              >
            </v-list>
          </v-card-text>
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
    ...mapGetters("orders", { findOrdersInStore: "find" }),
    orders() {
      return this.findOrdersInStore({
        query: {
          $sort: { createdAt: 1 },
          $populate: "users"
        }
      });
    }
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
    ...mapActions("auth", ["logout"]),
    ...mapActions("orders", {
      findOrders: "find"
    })
  },
  created() {
    if (this.user) {
      console.log("ok");
      this.findOrders({
        query: {
          $sort: { createdAt: -1 },
          $limit: 50,
          $populate: "users"
        }
      });
    } else {
      console.log("not ok");
    }
    console.log(this.orders);
  }
};
</script>
