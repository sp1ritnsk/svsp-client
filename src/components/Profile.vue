<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-navigation-drawer
          app
          clipped
          left
          disable-resize-watcher
          v-model="accountDrawer"
        >
          <v-sheet color="grey lighten-4" class="pa-4">
            <v-list-item two-line v-if="user">
              <v-list-item-content class="pb-0">
                <v-list-item-title class="title">
                  {{ user.firstname }} {{ user.lastname }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ user.email }}
                </v-list-item-subtitle>
                <div class="text-left">
                  <v-btn
                    text
                    class="ml-0"
                    x-small
                    color="primary"
                    @click.prevent="logOut()"
                    rounded
                    outlined
                    >Выход</v-btn
                  >
                  <v-chip
                    class="ma-2"
                    color="error"
                    dark
                    x-small
                    v-if="user.role === 'admin'"
                  >
                    Администратор
                  </v-chip>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-sheet>
          <v-divider></v-divider>
          <v-list dense nav>
            <v-list-item link to="/account" exact>
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  Подписки
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/account/profile" exact>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  Профиль
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-card>
          <v-card-title>
            <div class="text-h5">
              Редактирование профиля
            </div>
          </v-card-title>
          <v-card-subtitle>
            <div>
              Вы зарегистрированы как
              <span class="font-weight-medium">Физическое лицо</span>
            </div>
          </v-card-subtitle>

          <v-divider></v-divider>

          <v-card-text>
            <v-form ref="form" @submit.prevent="submitForm()" v-if="user">
              <v-container fluid>
                <v-row justify="space-around">
                  <v-col cols="12" sm="12" md="4">
                    <div class="text-h6 font-weight-regular pb-2">
                      Аккаунт
                    </div>
                    <v-text-field
                      ref="email"
                      v-model="editedItem.email"
                      label="Email"
                      required
                      outlined
                      dense
                      :error-messages="emailErrors"
                      @change="$v.editedItem.email.$touch()"
                      @blur="$v.editedItem.email.$touch()"
                    >
                    </v-text-field>
                    <v-text-field
                      ref="password"
                      v-model="editedItem.password"
                      label="Пароль"
                      outlined
                      type="password"
                      dense
                      persistent-hint
                      hint="Введите новый пароль"
                      :error-messages="passwordErrors"
                    ></v-text-field>
                    <div class="text-h6 font-weight-regular pb-2">
                      Информация
                    </div>
                    <v-text-field
                      ref="lastname"
                      v-model="editedItem.lastname"
                      label="Фамилия"
                      outlined
                      required
                      dense
                      :error-messages="lastnameErrors"
                      @change="$v.editedItem.lastname.$touch()"
                      @blur="$v.editedItem.lastname.$touch()"
                    ></v-text-field>
                    <v-text-field
                      ref="firstname"
                      v-model="editedItem.firstname"
                      label="Имя"
                      outlined
                      required
                      dense
                      :error-messages="firstnameErrors"
                      @change="$v.editedItem.firstname.$touch()"
                      @blur="$v.editedItem.firstname.$touch()"
                    ></v-text-field>
                    <v-text-field
                      ref="patronym"
                      v-model="editedItem.patronym"
                      label="Отчество"
                      outlined
                      required
                      dense
                      :error-messages="patronymErrors"
                      @change="$v.editedItem.patronym.$touch()"
                      @blur="$v.editedItem.patronym.$touch()"
                    ></v-text-field>
                    <v-text-field
                      ref="phone"
                      v-model="editedItem.phone"
                      label="Телефон"
                      outlined
                      required
                      dense
                      :error-messages="phoneErrors"
                      @change="$v.editedItem.phone.$touch()"
                      @blur="$v.editedItem.phone.$touch()"
                    ></v-text-field>

                    <v-text-field
                      ref="bin"
                      v-model="editedItem.bin"
                      label="БИН"
                      outlined
                      required
                      dense
                      v-if="editedItem.type === 'Юридическое лицо'"
                      :error-messages="binErrors"
                      @change="$v.editedItem.bin.$touch()"
                      @blur="$v.editedItem.bin.$touch()"
                    ></v-text-field>
                  </v-col>
                  <!-- <v-col cols="4" sm="12" md="4">
									<div class="text-h6 font-weight-regular pb-2">
										Организация
									</div>
									<v-text-field
										ref="bin"
										v-model="bin"
										label="БИН"
										outlined
										required
										dense
									></v-text-field>
									<v-text-field
										ref="bin"
										v-model="bin"
										label="Название"
										outlined
										required
										dense
									></v-text-field>
									<v-text-field
										ref="bin"
										v-model="bin"
										label="Область"
										outlined
										required
										dense
									></v-text-field>
									<v-text-field
										ref="bin"
										v-model="bin"
										label="Район"
										outlined
										required
										dense
									></v-text-field>
									<v-text-field
										ref="bin"
										v-model="bin"
										label="Город или населенный пункт"
										outlined
										required
										dense
									></v-text-field>
									<v-text-field
										ref="bin"
										v-model="bin"
										label="Адрес"
										outlined
										required
										dense
									></v-text-field>
									<v-text-field
										ref="bin"
										v-model="bin"
										label="Сфера деятельности"
										outlined
										required
										dense
									></v-text-field>
								</v-col> -->
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="4" class="text-center">
                    <v-btn class="mx-2" color="success" type="submit"
                      >Сохранить</v-btn
                    >
                    <v-btn>Отмена</v-btn>
                  </v-col>
                </v-row>
              </v-container>
              <v-snackbar v-model="snackbar" :timeout="2000" color="success">
                <span>{{ message }}</span>

                <template v-slot:action="{ attrs }">
                  <v-btn text v-bind="attrs" @click="snackbar = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </template>
              </v-snackbar>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
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
    editedItem: {
      email: { required, email },
      password: {
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
    }
  },

  name: "Profile",
  data: () => ({
    editedItem: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      patronym: "",
      phone: "",
      iin: ""
      // organisation: {
      //   bin: Number,
      //   name: String,
      //   district
      // }
    },
    message: "",
    snackbar: false
  }),
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState(["accountDrawer"]),

    accountDrawer: {
      get() {
        return this.$store.state.accountDrawer;
      },
      set(ev) {
        this.$store.commit("setDrawer", ev);
      }
    },

    firstnameErrors() {
      const errors = [];
      if (!this.$v.editedItem.firstname.$dirty) return errors;
      !this.$v.editedItem.firstname.required && errors.push("Укажите имя");
      return errors;
    },
    lastnameErrors() {
      const errors = [];
      if (!this.$v.editedItem.lastname.$dirty) return errors;
      !this.$v.editedItem.lastname.required && errors.push("Укажите фамилию");
      return errors;
    },
    patronymErrors() {
      const errors = [];
      if (!this.$v.editedItem.patronym.$dirty) return errors;
      !this.$v.editedItem.patronym.required && errors.push("Укажите отчество");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.editedItem.email.$dirty) return errors;
      !this.$v.editedItem.email.email && errors.push("Неверный формат email");
      !this.$v.editedItem.email.required && errors.push("Укажите email");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.editedItem.password.$dirty) return errors;
      !this.$v.editedItem.password.minLength &&
        errors.push("Пароль должен быть больше 7 символов");
      !this.$v.editedItem.password.matchRegex &&
        errors.push(
          "Пароль должен содержать цифры, латинские строчные и прописные буквы"
        );
      return errors;
    },
    binErrors() {
      const errors = [];
      if (!this.$v.editedItem.bin.$dirty) return errors;
      !this.$v.editedItem.bin.required && errors.push("Укажите БИН");
      !this.$v.editedItem.bin.integer && errors.push("Не верный формат БИН");
      !this.$v.editedItem.bin.minLength &&
        errors.push("БИН должен состоять из 12 чисел");
      !this.$v.editedItem.bin.maxLength &&
        errors.push("БИН должен состоять из 12 чисел");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.editedItem.phone.$dirty) return errors;
      !this.$v.editedItem.phone.required &&
        errors.push("Укажите номер телефона");
      return errors;
    }
  },
  methods: {
    ...mapActions("users", {
      getUser: "get"
    }),
    ...mapActions("users", {
      patchUser: "patch"
    }),
    submitForm() {
      this.message = "";

      let user = this.user.clone();
      user.lastname = this.editedItem.lastname;
      user.firstname = this.editedItem.firstname;
      user.patronym = this.editedItem.patronym;
      user.password = this.editedItem.password;
      user.phone = this.editedItem.phone;
      user.iin = this.editedItem.iin;
      user.bin = this.editedItem.bin;
      user.commit();
      this.user
        .save()
        .then(response => {
          this.message = "Информация успешно сохранена";
          this.snackbar = true;
        })
        .catch(err => {
          this.message =
            "Произошла ошибка при сохранении информации. Проверьте форму и повторите еще раз.";
          this.snackbar = true;
          console.log(err);
        });
    },
    ...mapActions(["toggleDrawer"])
  },
  components: {},
  created: function() {
    this.editedItem = Object.assign({}, this.user);
  }
};
</script>
<style lang="scss">
html {
  overflow-y: auto;
}
</style>
