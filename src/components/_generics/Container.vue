<template functional>
  <div class="product-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style scoped>
.product-container {
  border: 1px solid #969696;
  padding: 2rem;
  /* box-shadow: 5px 10px 18px #969696; */
  border-radius: 5px;
  background-color: #ffffff;
}
</style>
