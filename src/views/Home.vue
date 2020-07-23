<template>
  <div class="row home">
    <div class="col-md-4">
      <ShoppingCart />
    </div>
    <div class="col-md-8">
      <Products />
    </div>
  </div>
</template>

<script>
const Products = () => import("@/components/Products");
const ShoppingCart = () => import("@/components/ShoppingCart");
export default {
  name: "Home",
  components: {
    Products,
    ShoppingCart
  }
};
</script>

<style scoped>
.home {
  margin-top: 5rem;
}
</style>
