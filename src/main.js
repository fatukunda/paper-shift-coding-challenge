import Vue from "vue";
import {
  BootstrapVue,
  IconsPlugin,
  BIcon,
  BIconPersonCircle,
  BIconCartFill,
  BIconArrowUpCircleFill,
  BIconArrowDownCircleFill,
  BIconTrashFill,
  BIconArrowLeftShort
} from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { auth } from "./config/firebase";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("BIcon", BIcon);
Vue.component("BIconPersonCircle", BIconPersonCircle);
Vue.component("BIconCart", BIconCartFill);
Vue.component("BIconArrowUpCircleFill", BIconArrowUpCircleFill);
Vue.component("BIconArrowDownCircleFill", BIconArrowDownCircleFill);
Vue.component("BIconTrashFill", BIconTrashFill);
Vue.component("BIconArrowLeftShort", BIconArrowLeftShort);
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
