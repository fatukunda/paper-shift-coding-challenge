import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import shoppingCart from "./modules/shoppingCart";
import authentication from "./modules/authentication";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    shoppingCart,
    authentication
  }
});
