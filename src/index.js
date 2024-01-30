import AdvancedMap from "./components/AdvancedMap.vue";
import AdvancedListing from "./components/AdvancedListing.vue";

export default {
  install: (app, options) => {
    app.component("AdvancedMap", AdvancedMap);
    app.component("AdvancedListing", AdvancedListing);
  },
};