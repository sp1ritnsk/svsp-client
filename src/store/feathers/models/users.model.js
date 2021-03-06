import { BaseModel } from "@/store/feathers/feathers.client.js";

export default class User extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "User";

  // eslint-disable-next-line no-unused-vars
  static instanceDefaults(data, { models, store }) {
    return {
      // write your default properties for reactivity here; see: https://vuex.feathersjs.com/model-classes.html#instancedefaults
      // email: '',
      // password: '',
      // firstname: '',
      // lastname: '',
      // patronym: '',
      // phone: '',
      // type: '',
      // iin: '',
      // bin: '',
    };
  }

  // eslint-disable-next-line no-unused-vars
  static setupInstance(data, { models, store }) {
    // use this for transforming your data, e.g. transform a Date-string into a Date object; see: https://vuex.feathersjs.com/model-classes.html#setupinstance
    return data;
  }
}
