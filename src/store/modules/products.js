const firebase = require("../../config/firebase");
const state = {
  product: null,
  products: null,
  isLoading: false,
  error: null
};

const getters = {
  product: state => state.product,
  products: state => state.products,
  isLoading: state => state.isLoading,
  error: state => state.error
};

const mutations = {
  setAllProducts: (state, products) => (state.products = products),
  setSingleProduct: (state, product) => (state.product = product),
  setError: (state, error) => (state.error = error),
  setLoading: (state, isLoading) => (state.isLoading = isLoading)
};

const actions = {
  fetchAllProducts({ commit }) {
    commit("setLoading", true);
    firebase.productsCollection.onSnapshot(querySnapShot => {
      const products = [];
      querySnapShot.forEach(doc => {
        const product = doc.data();
        product.id = doc.id;
        products.push(product);
      });
      commit("setLoading", false);
      commit("setAllProducts", products);
    });
  },
  fetchSingleProduct({ commit }, id) {
    commit("setLoading", true);
    firebase.productsCollection
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          const product = doc.data();
          product.id = doc.id;
          commit("setSingleProduct", product);
          commit("setLoading", false);
        }
      })
      .catch(err => {
        commit("setError", err);
        commit("setLoading", false);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
