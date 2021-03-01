<template>
  <v-form
    ref="form"
    @submit.prevent="
      signUp(
        email,
        password,
        firstname,
        lastname,
        patronym,
        phone,
        type,
        iin,
        bin
      )
    "
  >
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
                dense
              >
              </v-text-field>
              <v-text-field
                ref="password"
                v-model="password"
                label="Пароль"
                outlined
                type="password"
                dense
              ></v-text-field>
              <v-text-field
                ref="firstname"
                v-model="firstname"
                label="Имя"
                outlined
                required
                dense
              ></v-text-field>
              <v-text-field
                ref="lastname"
                v-model="lastname"
                label="Фамилия"
                outlined
                required
                dense
              ></v-text-field>
              <v-text-field
                ref="patronym"
                v-model="patronym"
                label="Отчество"
                outlined
                required
                dense
              ></v-text-field>
              <v-text-field
                ref="phone"
                v-model="phone"
                label="Телефон"
                outlined
                required
                dense
              ></v-text-field>
              <v-select
                :items="types"
                v-model="type"
                outlined
                label="Тип субъекта"
                dense
              ></v-select>

              <!-- нужно ли собирать ИИН пользователей??? -->
              <!-- <v-text-field
								ref="iin"
								v-model="iin"
								label="ИИН"
								outlined
								required
								dense
								v-if="type === 'Физическое лицо' || !type"
							></v-text-field> -->

              <v-text-field
                ref="bin"
                v-model="bin"
                label="БИН"
                outlined
                required
                dense
                v-if="type === 'Юридическое лицо'"
              ></v-text-field>
              <v-checkbox v-model="checkbox" class="pt-0 mt-0">
                <template v-slot:label>
                  <div>
                    Ознакомлен(а) и согласен(а) с
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a target="_blank" href="/" @click.stop v-on="on">
                          договором офертой
                        </a>
                      </template>
                      Открывается в новом окне
                    </v-tooltip>
                    .
                  </div>
                </template>
              </v-checkbox>
              <v-btn color="blue" dark type="submit">Отправить</v-btn>
            </v-card-text>
            <v-card-text class="pt-0">
              <v-divider></v-divider>
              <p class="ma-2">
                Уже зарегистрированы?
                <router-link to="/signin">Войдите</router-link>
              </p>
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
    email: undefined,
    password: undefined,
    error: undefined,
    types: ["Физическое лицо", "Юридическое лицо"],
    firstname: undefined,
    lastname: undefined,
    patronym: undefined,
    phone: undefined,
    type: "Физическое лицо",
    iin: undefined,
    bin: undefined,
    checkbox: false
  }),
  methods: {
    dismissError() {
      this.error = undefined;
      // this.clearCreateError();
    },
    signUp(
      email,
      password,
      firstname,
      lastname,
      patronym,
      phone,
      type,
      iin,
      bin
    ) {
      this.dismissError();
      // Automatically log the user in after successful signup.
      this.createUser({
        email,
        password,
        firstname,
        lastname,
        patronym,
        phone,
        type,
        iin,
        bin
      })
        .then(response => {
          this.authenticate({ strategy: "local", email, password }).then(() =>
            this.$router.push("/account")
          );
        })
        // Just use the returned error instead of mapping it from the store.
        .catch(error => {
          // Convert the error to a plain object and add a message.
          let message = error.message;
          console.log(error);
          // error = Object.assign({}, error);
          error.message =
            message == "email: value already exists."
              ? "Пользователь с таким email адресом уже зарегистрирован."
              : "Произошла ошибка при регистрации. Проверте форму и попробуйте еще раз.";
          this.error = error;
          console.log(error.message);
        });
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

<style lang="scss"></style>
