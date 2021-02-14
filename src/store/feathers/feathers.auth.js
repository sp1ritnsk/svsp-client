// eslint-disable-next-line no-unused-vars
import feathersClient, { makeAuthPlugin, models } from "./feathers.client";

// for more information see https://vuex.feathersjs.com/auth-plugin.html#configuration
export default makeAuthPlugin({
  serverAlias: "api",
  userService: "users",
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});
