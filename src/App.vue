<template>
  <div>
    <div class="container-fluid mt-4">
      <Header />
    </div>
    <div class="container">
      <router-view />
    </div>
    <Modal title="Sign Up / Create Account" :visible="visible">
      <AuthenticationForm />
    </Modal>
  </div>
</template>

<script>
import store from "./store";
const Header = () => import("@/components/Header");
const Modal = () => import("@/components/_generics/Modal");
const AuthenticationForm = () => import("@/components/AuthenticationForm");
export default {
  name: "App",
  components: {
    Header,
    Modal,
    AuthenticationForm
  },
  data() {
    return {
      visible: false
    };
  },
  created() {
    // Check if there is a logged in user in local storage and then push their details to the store.
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (isLoggedIn) {
      const user = JSON.parse(localStorage.getItem("user"));
      store.commit("setLoggedInUser", user);
      store.commit("setIsLoggedIn", true);
    }
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      store.commit("setCartProducts", cartItems);
    } else {
      store.commit("setCartProducts", []);
    }
  }
};
</script>
<style></style>
