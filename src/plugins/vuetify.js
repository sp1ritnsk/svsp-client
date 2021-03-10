import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0492D1",
        secondary: "#09BEF1",
        accent: "#FE5F55",
        success: "#67C918",
        warning: "#FFBC1F",
        error: "#BA2D0B",
        anchor: "#044981"
      }
    }
  }
});
