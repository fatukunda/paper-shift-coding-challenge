const firebase = require("../../config/firebase");
const state = {
  loggedInUser: {},
  isLoggedIn: false,
  isLoading: false,
  error: null
};

const getters = {
  user: state => state.loggedInUser,
  isLoggedIn: state => state.isLoggedIn,
  isAuthLoading: state => state.isLoading,
  isAuthError: state => state.error
};

const mutations = {
  setLoggedInUser: (state, user) => (state.loggedInUser = user),
  setAuthError: (state, error) => (state.error = error),
  setAuthLoading: (state, isLoading) => (state.isLoading = isLoading),
  setIsLoggedIn: (state, isLoggedIn) => (state.isLoggedIn = isLoggedIn)
};

const actions = {
  signUp: async ({ dispatch, commit }, userDetails) => {
    const { firstName, lastName, email, password, component } = userDetails;
    commit("setAuthLoading", true);
    try {
      // Sign up a user
      const { user } = await firebase.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // create user profile in the userCollection
      await firebase.usersCollection.doc(user.uid).set({
        firstName,
        lastName,
        email
      });
      const payload = { user, component };
      // fetch user profile and set in state
      dispatch("fetchUser", payload);
    } catch (error) {
      commit("setAuthLoading", false);
      commit("setAuthError", error);
    }
  },

  login: async ({ dispatch, commit }, loginInfo) => {
    const { email, password, component } = loginInfo;
    commit("setAuthLoading", true);
    try {
      // sign user in
      const { user } = await firebase.auth.signInWithEmailAndPassword(
        email,
        password
      );
      const payload = { user, component };
      dispatch("fetchUser", payload);
    } catch (error) {
      commit("setAuthLoading", false);
      commit("setAuthError", error);
    }
  },
  logout: async ({ commit }) => {
    // log user out
    await firebase.auth.signOut();
    // Remove user data from state
    commit("setLoggedInUser", {});
    commit("setIsLoggedIn", false);
    //Remove user from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  },

  fetchUser: async ({ commit }, loggedInUser) => {
    try {
      // fetch user from the usersCollection
      const user = await firebase.usersCollection
        .doc(loggedInUser.user.uid)
        .get();
      const userData = user.data();
      // Set user's data in the store
      commit("setLoggedInUser", userData);
      commit("setAuthLoading", false);
      commit("setIsLoggedIn", true);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(userData));
      loggedInUser.component.$bvModal.hide("main-modal");
    } catch (error) {
      commit("setAuthLoading", false);
      commit("setAuthError", error);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
