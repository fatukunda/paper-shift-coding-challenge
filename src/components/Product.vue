<template>
  <div class="row">
    <div class="col-md-6">
      <strong class="pdct-name" @click="navigateToSingleProduct">{{
        name
      }}</strong>
    </div>
    <div class="col-md-6">
      <div class="float-right">
        <Button text="Add to Cart" :onClick="addToCart"></Button>
      </div>
    </div>
    <div class="col-md-12">
      <p>{{ description }}</p>
    </div>
    <div class="col-md-12">
      <p class="price">
        <strong>{{ `$ ${price}` }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@/components/_generics/Button";
export default {
  name: "Product",
  components: {
    Button
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    price: {
      required: true,
      type: Number
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    addToCart() {
      const itemToAdd = {
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price
      };
      this.$emit("addItemToCart", itemToAdd);
    },
    navigateToSingleProduct() {
      if (this.isLoggedIn) {
        this.$router.push(`/products/${this.id}`);
      } else {
        this.$bvModal.show("main-modal");
      }
    }
  }
};
</script>

<style scoped>
.price {
  color: #5cceb3;
}
.pdct-name {
  color: inherit;
  cursor: pointer;
}
.pdct-name:hover {
  text-decoration: underline;
}
</style>
