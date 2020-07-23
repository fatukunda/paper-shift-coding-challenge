<template>
  <div class="product-container">
    <Container>
      <div class="text-center">
        <BIconPersonCircle class="h3" />
        <hr />
      </div>
      <div v-if="isLoading" class="text-center d-flex justify-content-center">
        <b-spinner variant="info"></b-spinner>
      </div>
      <Product
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        @addItemToCart="addProductToCart(product)"
      />
      <div class="mb-2" v-if="products">
        <p class="float-right">
          <strong> # of products: {{ products.length }}</strong>
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const Product = () => import("@/components/Product");
const Container = () => import("@/components/_generics/Container");
export default {
  name: "Products",
  components: {
    Product,
    Container
  },
  computed: {
    ...mapGetters(["products", "isLoading"])
  },
  methods: {
    ...mapActions(["fetchAllProducts", "addProductToCart"])
  },
  created() {
    this.fetchAllProducts();
  }
};
</script>

<style scoped>
.product-container {
  min-height: 600px;
}
</style>
