import Vue from "vue";
const state = {
  cartProducts: []
};

const getters = {
  cartProducts: state => state.cartProducts,
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

const mutations = {
  pushProductToCart: (state, product) => {
    state.cartProducts.push(product);
  },
  increamentItemQuantity: (state, product) => {
    let cartItem = state.cartProducts.find(item => item.id === product.id);
    cartItem.quantity++;
  },
  decreamentItemQuantity: (state, product) => {
    let cartItem = state.cartProducts.find(item => item.id === product.id);
    if (cartItem && cartItem.quantity !== 1) {
      cartItem.quantity--;
    }
  },
  removeProduct(state, product) {
    state.cartProducts.filter(pdct => pdct.id !== product.id);
  },
  removeAllProducts(state) {
    state.cartProducts = [];
    localStorage.removeItem("cart");
  },
  saveCartToLocalStorage(state) {
    localStorage.setItem("cart", JSON.stringify(state.cartProducts));
  },
  setCartProducts(state, products) {
    state.cartProducts = products;
  }
};

const actions = {
  addProductToCart({ commit }, product) {
    Vue.set(product, "quantity", 1);
    const cartItem = state.cartProducts.find(pdct => pdct.id === product.id);
    if (!cartItem) {
      commit("pushProductToCart", product);
      commit("saveCartToLocalStorage");
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
