<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <strong>{{ name }}</strong>
      </div>
      <div class="col-md-6">
        <BIconArrowUpCircleFill class="mr-1 arrow" @click="increament" />
        <BIconArrowDownCircleFill class="arrow" @click="decreament" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <strong class="price">{{ `${price}$ each` }}</strong>
      </div>
      <div class="col-md-6">Quantity: {{ quantity }}</div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      required: true,
      type: String
    },
    price: {
      required: true
    },
    quantity: {
      required: true
    }
  },
  methods: {
    increament() {
      const item = {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity
      };
      this.$emit("increamentQuantity", item);
    },
    decreament() {
      const item = {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity
      };
      this.$emit("decreamentQuantity", item);
    }
  }
};
</script>

<style scoped>
.arrow {
  cursor: pointer;
}
.price {
  color: #5cceb3;
}
</style>
