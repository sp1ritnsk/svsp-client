<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6" class="text-center my-3">
        <h2 class="text-3 font-weight-light mb-4 text-uppercase">Аккаунт</h2>
        <div class="text-subtitle-2">
          Наличие аккаункта в системе позволяет Вам получить доступ к сервисам и
          данным референцных станций и контролировать подписки
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="4">
        <v-form ref="form" @submit.prevent="signIn(email, password)">
          <v-card class="mb-6" elevation="6">
            <v-card-title>ВХОД В СИСТЕМУ</v-card-title>
            <v-card-text>
              <v-text-field
                ref="email"
                v-model="email"
                label="Email"
                autocomplete="on"
                required
                outlined
                :error-messages="emailErrors"
                @change="$v.email.$touch()"
                @blur="$v.email.$touch()"
              >
              </v-text-field>
              <v-text-field
                ref="password"
                v-model="password"
                label="Password"
                outlined
                type="password"
              ></v-text-field>
              <v-btn color="primary" dark type="submit" block>Отправить</v-btn>
            </v-card-text>
            <v-card-text class="pt-0">
              <v-divider></v-divider>
              <p class="ma-2">
                Еще не зарегистрированы?
                <router-link to="/signup">Зарегистрируйтесь</router-link>
              </p>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :timeout="2000">
      <span>Проверьте форму и повторите отправку</span>

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email }
  },
  data: () => ({
    email: undefined,
    password: undefined,
    error: undefined,
    snackbar: false
  }),
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Неверный формат email");
      !this.$v.email.required && errors.push("Укажите email");
      return errors;
    }
  },
  methods: {
    dismissError() {
      this.error = undefined;
      // this.clearCreateError();
    },
    signIn(email, password) {
      this.dismissError();
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.snackbar);
        this.snackbar = true;
      } else {
        // Automatically log the user in after successful signup.
        this.authenticate({ strategy: "local", email, password })
          .then(() => {
            this.$router.push("/account");
          })
          // Just use the returned error instead of mapping it from the store.
          .catch(error => {
            let message = error.message;
            // console.log(error)
            // error = Object.assign({}, error);
            error.message =
              message == "email: value already exists."
                ? "Пользователь с таким email адресом уже зарегистрирован."
                : "Произошла ошибка при входе. Проверте форму и попробуйте еще раз.";
            this.error = error;
            console.log(error.message);
          });
      }
    },
    ...mapActions("users", {
      createUser: "create"
    }),
    // ...mapMutations("users", {
    //   clearCreateError: "clearCreateError"
    // }),
    ...mapActions("auth", ["authenticate"])
  }
};
</script>
