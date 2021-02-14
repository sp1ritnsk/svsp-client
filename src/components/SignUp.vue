<template>
  <v-form ref="form" @submit.prevent="signUp(email, password)">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="4">
          <v-card class="mt-5" elevation="6">
            <v-card-title>РЕГИСТРАЦИЯ В СИСТЕМЕ</v-card-title>
            <v-card-text>
              <v-text-field
                ref="email"
                v-model="email"
                label="Email"
                required
                outlined
              >
              </v-text-field>
              <v-text-field
                ref="password"
                v-model="password"
                label="Password"
                outlined
                type="password"
              ></v-text-field>
              <v-btn color="blue" dark type="submit">Отправить</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    dismissError() {
      this.error = undefined;
      this.clearCreateError();
    },
    signUp(email, password) {
      this.dismissError();
      // Automatically log the user in after successful signup.
      this.createUser({ email, password })
        .then(response => {
          console.log(response);
          // this.authenticate({ strategy: "local", email, password });
        })
        // Just use the returned error instead of mapping it from the store.
        .catch(error => {
          // Convert the error to a plain object and add a message.
          let type = error.errorType;
          error = Object.assign({}, error);
          error.message =
            type === "uniqueViolated"
              ? "That email address is unavailable."
              : "An error prevented signup.";
          this.error = error;
        });
    },
    ...mapActions("users", {
      createUser: "create"
    }),
    ...mapMutations("users", {
      clearCreateError: "clearCreateError"
    }),
    ...mapActions("auth", ["authenticate"])
  }
};
</script>

<style lang="scss">
html {
  overflow: hidden;
}
</style>
