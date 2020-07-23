<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <div v-if="cartProducts.length" class="shopping-cart">
        <BIconCartFill class="h3" />
        <hr />
        <CartItem
          v-for="item in cartProducts"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :price="item.price"
          :quantity="item.quantity"
          @increamentQuantity="increamentQuantity(item)"
          @decreamentQuantity="decreamentQuatity(item)"
        />
        <div class="row">
          <div class="col-md-6">
            Total Quantity: <strong>{{ cartProducts.length }}</strong>
          </div>
          <div class="col-md-6">
            <span @click="removeAllProducts" class="trash-all">
              <BIconTrashFill /> Remove all
            </span>
          </div>
          <div class="col-md-12 text-center mt-4">
            <b-button
              variant="success"
              size="sm"
              block
              class="btn-checkout"
              @click="checkout"
              >{{ `Checkout ($${cartTotalPrice.toFixed(2)})` }}</b-button
            >
          </div>
        </div>
      </div>
      <div v-else>
        <img
          src="../assets/empty-cart.svg"
          alt="empty-cart"
          class="empty-cart"
        />
        <p class="mt-4">Your shopping cart is empty</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import CartItem from "./CartItem";
export default {
  name: "ShoppingCart",
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(["cartProducts", "cartTotalPrice", "isLoggedIn"])
  },
  methods: {
    ...mapMutations([
      "increamentItemQuantity",
      "decreamentItemQuantity",
      "removeAllProducts",
      "saveCartToLocalStorage"
    ]),
    increamentQuantity(item) {
      this.increamentItemQuantity(item);
      this.saveCartToLocalStorage();
    },
    decreamentQuatity(item) {
      this.decreamentItemQuantity(item);
      this.saveCartToLocalStorage();
    },
    checkout() {
      if (!this.isLoggedIn) {
        this.$bvModal.show("main-modal");
      } else {
        alert("Payment and Shipment not implemented in this iteration.");
      }
    }
  }
};
</script>

<style scoped>
.trash-all {
  cursor: pointer;
}
.empty-cart {
  width: 5rem;
  margin-top: 10rem;
}
.shopping-cart {
  margin-top: 10rem;
}
.btn-checkout {
  background-color: #5cceb3;
  border: 0;
}
.btn-checkout:hover,
.btn-checkout:active {
  background-color: #55b9a2;
}
</style>
