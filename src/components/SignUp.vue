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
        bin,
        checkbox
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
                :error-messages="emailErrors"
                @change="$v.email.$touch()"
                @blur="$v.email.$touch()"
              >
              </v-text-field>
              <v-text-field
                ref="password"
                v-model="password"
                label="Пароль"
                outlined
                type="password"
                dense
                :error-messages="passwordErrors"
                @change="$v.password.$touch()"
                @blur="$v.password.$touch()"
              ></v-text-field>
              <v-text-field
                ref="firstname"
                v-model="firstname"
                label="Имя"
                outlined
                required
                dense
                :error-messages="firstnameErrors"
                @change="$v.firstname.$touch()"
                @blur="$v.firstname.$touch()"
              ></v-text-field>
              <v-text-field
                ref="lastname"
                v-model="lastname"
                label="Фамилия"
                outlined
                required
                dense
                :error-messages="lastnameErrors"
                @change="$v.lastname.$touch()"
                @blur="$v.lastname.$touch()"
              ></v-text-field>
              <v-text-field
                ref="patronym"
                v-model="patronym"
                label="Отчество"
                outlined
                required
                dense
                :error-messages="patronymErrors"
                @change="$v.patronym.$touch()"
                @blur="$v.patronym.$touch()"
              ></v-text-field>
              <v-text-field
                ref="phone"
                v-model="phone"
                label="Телефон"
                outlined
                required
                dense
                :error-messages="phoneErrors"
                @change="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
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
                :error-messages="binErrors"
                @change="$v.bin.$touch()"
                @blur="$v.bin.$touch()"
              ></v-text-field>
              <v-checkbox
                v-model="checkbox"
                class="pt-0 mt-0"
                :error-messages="checkboxErrors"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              >
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
              <v-btn
                :disabled="!checkbox"
                color="blue"
                :dark="checkbox"
                type="submit"
                >Отправить</v-btn
              >
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
    <v-snackbar v-model="snackbar" :timeout="2000">
      <span>Проверьте форму и повторите отправку</span>

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
  helpers,
  integer
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(8),
      matchRegex: function(value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,24}$/.test(value);
      }
    },
    iin: {
      required,
      integer,
      minLength: minLength(12),
      maxLength: maxLength(12)
    },
    bin: {
      required,
      integer,
      minLength: minLength(12),
      maxLength: maxLength(12)
    },
    firstname: { required },
    lastname: { required },
    patronym: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    },
    type: { required },
    phone: { required }
  },

  data: () => ({
    snackbar: false,
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
    checkbox: false,
    isValid: false
  }),
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked &&
        errors.push("Для продолжения регистрации необходимо согласие!");
      return errors;
    },
    firstnameErrors() {
      const errors = [];
      if (!this.$v.firstname.$dirty) return errors;
      !this.$v.firstname.required && errors.push("Укажите имя");
      return errors;
    },
    lastnameErrors() {
      const errors = [];
      if (!this.$v.lastname.$dirty) return errors;
      !this.$v.lastname.required && errors.push("Укажите фамилию");
      return errors;
    },
    patronymErrors() {
      const errors = [];
      if (!this.$v.patronym.$dirty) return errors;
      !this.$v.patronym.required && errors.push("Укажите отчество");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Неверный формат email");
      !this.$v.email.required && errors.push("Укажите email");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Укажите пароль");
      !this.$v.password.minLength &&
        errors.push("Пароль должен быть больше 7 символов");
      !this.$v.password.matchRegex &&
        errors.push(
          "Пароль должен содержать цифры, латинские строчные и прописные буквы"
        );
      return errors;
    },
    binErrors() {
      const errors = [];
      if (!this.$v.bin.$dirty) return errors;
      !this.$v.bin.required && errors.push("Укажите БИН");
      !this.$v.bin.integer && errors.push("Не верный формат БИН");
      !this.$v.bin.minLength && errors.push("БИН должен состоять из 12 чисел");
      !this.$v.bin.maxLength && errors.push("БИН должен состоять из 12 чисел");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push("Укажите номер телефона");
      return errors;
    }
  },
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
      bin,
      checkbox
    ) {
      this.dismissError();
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.snackbar);
        this.snackbar = true;
      } else {
        this.isValid = true;
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

<style lang="scss"></style>
