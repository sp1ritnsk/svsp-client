import { BaseModel } from "@/store/feathers/feathers.client.js";

export default class orders extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "Order";

  // eslint-disable-next-line no-unused-vars
  static instanceDefaults(data, { models, store }) {
    return {
      name: "",
      surname: "",
      loginNTRIP: "",
      passwordNTRIP: "",
      bin: "",
      iin: "",
      region: "",
      district: "",
      city: "",
      address: "",
      phone: "",
      plan: "",
      begin_date: "",
      company: ""
      // write your default properties for reactivity here; see: https://vuex.feathersjs.com/model-classes.html#instancedefaults
    };
  }

  // eslint-disable-next-line no-unused-vars
  static setupInstance(data, { models, store }) {
    // use this for transforming your data, e.g. transform a Date-string into a Date object; see: https://vuex.feathersjs.com/model-classes.html#setupinstance
    return data;
  }
}
