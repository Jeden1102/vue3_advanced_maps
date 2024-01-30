import { createApp } from "vue";
import "./style.css";
import AdvancedMap from "./components/AdvancedMap.vue";
import AdvancedListing from "./components/AdvancedListing.vue";
import App from "./App.vue";

export { AdvancedListing, AdvancedMap };

createApp(App).mount("#app");

export default {
  install: (app: typeof App) => {
    app.component("AdvancedMap", AdvancedMap);
    app.component("AdvancedListing", AdvancedListing);
  },
};
