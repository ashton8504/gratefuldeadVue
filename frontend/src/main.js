import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the Vue Router instance
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

createApp(App).use(router).mount("#app");
