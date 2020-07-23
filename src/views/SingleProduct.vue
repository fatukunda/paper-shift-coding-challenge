<template>
  <div class="d-flex justify-content-center align-items-center main">
    <div class="single-product-container">
      <Container>
        <div v-if="isLoading" class="text-center d-flex justify-content-center">
          <b-spinner variant="info"></b-spinner>
        </div>
        <div
          v-else
          class="row d-flex justify-content-center align-items-center"
        >
          <div class="col-md-12">
            <router-link to="/"
              ><BIconArrowLeftShort class="h3 arrow-left"
            /></router-link>
          </div>
          <div class="col-md-6" v-if="product">
            <h5>
              <strong>{{ product.name }}</strong>
            </h5>
            <span style="background-color: #eeeeee">{{
              product.category
            }}</span>
            <p class="mt-4">{{ product.description }}</p>
            <p>
              Founded: <strong> {{ product.founded }} </strong>
            </p>
            <b-button
              variant="info"
              size="sm"
              block
              class="btn-checkout"
              @click="addToCart"
            >
              Add to Cart
            </b-button>
          </div>
          <div class="col-md-6">
            <img :src="product.image" alt="product" />
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Container from "../components/Container";
export default {
  name: "SingleProduct",
  components: {
    Container
  },
  methods: {
    ...mapActions(["fetchSingleProduct", "addProductToCart"]),
    addToCart() {
      this.addProductToCart(this.product);
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters(["product", "isLoading"])
  },
  beforeMount() {
    this.fetchSingleProduct(this.$route.params.id);
  }
};
</script>

<style scoped>
.arrow-left {
  color: #5cceb3;
}
.main {
  height: 80vh;
}
.single-product-container {
  width: 60%;
  min-height: 500px;
}
img {
  width: 15rem;
}
.btn-checkout {
  background-color: #5cceb3;
  border: 0;
  width: 50%;
}
.btn-checkout:hover,
.btn-checkout:active {
  background-color: #55b9a2;
}
</style>
