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
        <v-card class="px-0 mx-0">
          <v-card-title>
            <div class="text-h5 ">
              Ваши подписки
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="headers" :items="orders.data">
            <!-- eslint-disable-next-line -->
						<template v-slot:item.begin_date="{ item }">
              <span>{{ new Date(item.begin_date).toLocaleDateString() }}</span>
            </template>
            <!-- eslint-disable-next-line -->
						<template v-slot:item.stations="{ item }">
              <span>{{ stationsString(item.stations) }}</span>
            </template>
            <!-- eslint-disable-next-line -->
						<template v-slot:item.status="{ item }">
              <span class="text-caption">{{ statusAlias(item) || "" }}</span>
            </template>

            <template v-slot:top v-if="isAdmin">
              <!-- Editing column and dialogs -->
              <v-dialog v-model="dialog" max-width="640px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Радактирование</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-select
                            :items="statuses"
                            item-text="alias"
                            item-value="status"
                            label="Статус подписки"
                            v-model="editedItem.status"
                            dense
                          ></v-select>
                          <v-text-field
                            v-model="editedItem.login_ntrip"
                            label="Логин NTRIP"
                            dense
                          ></v-text-field>

                          <v-text-field
                            v-model="editedItem.password_ntrip"
                            label="Пароль NTRIP"
                            dense
                          ></v-text-field>

                          <v-text-field
                            v-model="editedItem.region"
                            label="Область"
                            dense
                          ></v-text-field>

                          <v-text-field
                            v-model="editedItem.district"
                            label="Район"
                            dense
                          ></v-text-field>

                          <v-text-field
                            v-model="editedItem.city"
                            label="Город"
                            dense
                          ></v-text-field>

                          <v-text-field
                            v-model="editedItem.address"
                            label="Адрес"
                            dense
                          ></v-text-field>

                          <v-text-field
                            v-model="editedItem.plan"
                            label="Тарифный план"
                            dense
                          ></v-text-field>

                          <v-text-field
                            v-model="editedItem.begin_date"
                            label="Дата начала подписки"
                            dense
                          ></v-text-field>

                          <v-text-field
                            v-model="editedItem.end_date"
                            label="Дата завершения подписки"
                            dense
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Отмена
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Сохранить
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="640px">
                <v-card>
                  <v-card-title class="headline"
                    >Вы уверены, что хотите удалить подписку?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Отмена</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >Да</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>
            <!-- eslint-disable-next-line -->
						<template v-slot:item.actions="{ item }" v-if="isAdmin">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data: () => ({
    statuses: [
      { status: "new", alias: "Новая" },
      { status: "pending", alias: "На рассмотрении" },
      { status: "payment", alias: "Ожидает оплаты" },
      { status: "active", alias: "Активная" }
    ],
    headers: [
      {
        text: "Станции",
        align: "start",
        sortable: false,
        value: "stations"
      },
      { text: "Тарифный план", value: "plan" },
      { text: "Начало подписки", value: "begin_date" },
      { text: "Дата завершения", value: "end_date" },
      { text: "Статус", value: "status" },
      { text: "Данные подключения", value: "ntrip" },
      { text: "Действия", value: "actions" }
    ],
    editedItem: {
      user: null,
      stations: [],
      status: "",
      login_ntrip: "", // is generated after payment
      password_ntrip: "", // is generated after payment
      city: "",
      region: "",
      district: "",
      address: "",
      plan: "",
      begin_date: Date,
      end_date: Date
    },
    defaultItem: {
      user: null,
      stations: [],
      status: "",
      login_ntrip: "", // is generated after payment
      password_ntrip: "", // is generated after payment
      city: "",
      region: "",
      district: "",
      address: "",
      plan: "",
      begin_date: Date,
      end_date: Date
    },
    dialog: false,
    dialogDelete: false,
    editedIndex: -1
  }),
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
    // isAdmin(val){
    // 	val || false
    // }
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState(["accountDrawer"]),
    ...mapState("orders", { areOrdersLoading: "isFindPending" }),
    ...mapGetters("orders", { findOrdersInStore: "find" }),

    accountDrawer: {
      get() {
        return this.$store.state.accountDrawer;
      },
      set(ev) {
        this.$store.commit("setDrawer", ev);
      }
    },

    orders() {
      return this.findOrdersInStore({
        query: {
          $sort: { createdAt: -1 }
        }
      });
    },

    isAdmin() {
      // console.log(this.user === 'admin')
      if (this.user) {
        return this.user.role === "admin";
      } else {
        return false;
      }
    }
  },
  methods: {
    stationsString(arr) {
      if (arr instanceof Array) {
        return arr.join(", ");
      }
    },
    ...mapActions("auth", ["logout"]),
    ...mapActions("orders", {
      findOrders: "find"
    }),
    ...mapActions("orders", {
      updateOrder: "patch"
    }),
    ...mapActions("orders", {
      removeOrder: "remove"
    }),
    ...mapActions(["toggleDrawer"]),
    statusAlias(item) {
      let status;
      if (item.status) {
        status = this.statuses.find(el => {
          return el.status === item.status;
        });
        return status.alias;
      }
      // console.log(status.alias, 'qweqw')
    },
    logOut() {
      this.logout()
        .then(() => {
          this.$router.push("/signin");
          setTimeout(() => {
            window.location.reload();
          }, 20);
        })
        .catch(error => {
          console.log(error);
        });
    },
    editItem(item) {
      this.editedIndex = this.orders.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.orders.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.removeOrder(this.orders.data[this.editedIndex]._id);
      // this.orders.data.splice(this.editedIndex, 1)
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        this.updateOrder([this.editedItem._id, this.editedItem, {}]).then(
          res => {
            console.log(res);
          }
        );
      }
      this.close();
    }
  },
  created: function() {
    this.findOrders({
      query: {
        $sort: { createdAt: -1 }
      }
    }).catch(err => {
      console.log(err);
    });
  }
};
</script>
