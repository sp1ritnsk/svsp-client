// for more information see: https://vuex.feathersjs.com/getting-started.html#feathers-client-feathers-vuex

import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import auth from "@feathersjs/authentication-client";
import io from "socket.io-client";
import feathersVuex from "feathers-vuex";

const host = "http://localhost:3030";

const socket = io(host, {
  transports: ["websocket"]
});

const feathersClient = feathers()
  .configure(
    socketio(socket, {
      timeout: 5000
    })
  )
  .configure(auth({ storage: window.localStorage }));

export default feathersClient;

// Setup feathers-vuex, for more information see: https://vuex.feathersjs.com/getting-started.html#global-configuration
const {
  makeServicePlugin,
  makeAuthPlugin,
  BaseModel,
  models,
  clients,
  FeathersVuex
} = feathersVuex(feathersClient, {
  serverAlias: "api",
  idField: "_id"
});

export {
  makeAuthPlugin,
  makeServicePlugin,
  BaseModel,
  models,
  clients,
  FeathersVuex,
  host,
  socket
};
