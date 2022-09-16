import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueRouter from "vue-router";
axios.defaults.baseURL = "https://www.escook.cn";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";
Vue.use(VueRouter);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
const routes = [
  {
    path: "",
  },
];
const router = new VueRouter({
  routes,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
