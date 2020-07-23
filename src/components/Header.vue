<template>
  <div class="header">
    <div class="row">
      <div class="col-md-6">
        <h6 v-if="isLoggedIn" class="logout" @click="logout">Logout</h6>
        <h6 v-else class="logout" @click="setModalVisible">
          Login
        </h6>
      </div>
      <div class="col-md-6">
        <button class="btn btn-sm float-right cart-btn ml-2">
          <BIconCart /> {{ cartProducts.length }}
        </button>
        <button class="btn btn-sm float-right btn-user" v-if="isLoggedIn">
          <BIconPersonCircle /> {{ `${user.firstName} ${user.lastName}` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["cartProducts", "isLoggedIn", "user"])
  },
  methods: {
    ...mapActions(["logout"]),
    setModalVisible() {
      this.$bvModal.show("main-modal");
    }
  }
};
</script>

<style scoped>
.cart-btn {
  background-color: #5cceb3;
  color: #ffffff;
  min-width: 4rem;
  cursor: default !important;
}
.cart-btn:hover {
  background-color: #5cceb3;
  color: #ffffff;
}
.btn-user {
  background-color: #ffffff;
  border: 1px solid rgb(231, 229, 229);
  min-width: 6rem;
  cursor: default !important;
}
.logout {
  text-decoration: underline;
  cursor: pointer;
}
</style>
