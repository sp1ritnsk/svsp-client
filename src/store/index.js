import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { FeathersVuex } from "feathers-vuex";
Vue.use(FeathersVuex);

const req = require.context("@/store/feathers/services", true, /service.js$/);
const servicePlugins = req.keys().map(path => req(path).default);
import auth from "@/store/feathers/feathers.auth";

export default new Vuex.Store({
  plugins: [...servicePlugins, auth],
  state: { selectedFeatures: [] },
  mutations: {
    setFeature(state, f) {
      state.selectedFeatures = [...f];
    }
  },
  actions: {},
  modules: {}
});
