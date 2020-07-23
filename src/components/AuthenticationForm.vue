<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="form-group" v-if="!isLogin">
        <input
          type="text"
          class="form-control"
          placeholder="First Name"
          v-model="userDetails.firstName"
          required
        />
      </div>
      <div class="form-group" v-if="!isLogin">
        <input
          type="text"
          class="form-control"
          placeholder="Last Name"
          v-model="userDetails.lastName"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="userDetails.email"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="userDetails.password"
          required
        />
      </div>
      <button type="submit" class="btn btn-block btn-info btn-sm">
        <div
          class="spinner-border spinner-border-sm"
          role="status"
          v-if="isAuthLoading"
        >
          <span class="sr-only">Loading...</span>
        </div>
        {{ isLogin ? "Sign In" : "Sign Up" }}
      </button>
      <div v-if="isAuthError" class="alert alert-danger mt-4 mb-2" role="alert">
        {{ isAuthError.message }}
      </div>
      <div class="row">
        <div class="col-md-12 mt-4">
          <p class="text-center" v-if="isLogin">
            No Account?
            <strong class="sign-up-link" @click="setRegistration"
              >SIGN UP!</strong
            >
          </p>
          <p class="text-center" v-else>
            Already have an account?
            <strong class="sign-up-link" @click="setLogin">SIGN IN!</strong>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AuthenticationForm",
  data() {
    return {
      userDetails: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      isLogin: true
    };
  },
  computed: {
    ...mapGetters(["isAuthLoading", "isAuthError"])
  },
  methods: {
    ...mapActions(["signUp", "login"]),
    setRegistration() {
      this.isLogin = false;
    },
    setLogin() {
      this.isLogin = true;
    },
    handleSubmit() {
      const { firstName, lastName, email, password } = this.userDetails;
      const userDetails = {
        firstName,
        lastName,
        email,
        password,
        component: this
      };
      if (this.isLogin) {
        this.login({ email, password, component: this });
      } else {
        this.signUp(userDetails);
      }
    }
  }
};
</script>

<style scoped>
.sign-up-link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
