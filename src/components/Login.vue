<template>
  <div class="row">
    <div class="col-md-12 text-center mt-4">
      <h4>Login</h4>
      <div>
        <b-form class="login-form">
          <Input type="email" required placeholder="Email" :value="email" />
          <Input
            type="password"
            required
            placeholder="Password"
            :value="password"
          />
          <b-button block variant="info">Login</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
const Input = () => import("./_generics/Input");
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    Input
  }
};
</script>

<style scoped>
.login-form {
  width: 40%;
  margin: 0 auto;
}
</style>
