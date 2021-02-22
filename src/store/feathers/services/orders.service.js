import feathersClient, {
  makeServicePlugin
} from "@/store/feathers/feathers.client.js";

import Model from "../models/orders.model.js";

const servicePath = "orders";
// for more information see https://vuex.feathersjs.com/service-plugin.html#configuration
const servicePlugin = makeServicePlugin({
  Model,
  servicePath,
  namespace: "orders",
  service: feathersClient.service(servicePath),
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});

feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});

export default servicePlugin;
