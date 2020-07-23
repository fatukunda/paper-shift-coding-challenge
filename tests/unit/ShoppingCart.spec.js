import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ShoppingCart from "@/components/ShoppingCart.vue";
import { BIconCartFill, BIconTrashFill } from "bootstrap-vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ShoppingCart.vue", () => {
  const actions = {
    actionClick: jest.fn(),
    actionInput: jest.fn(),
    increamentItemQuantity: jest.fn(),
    decreamentItemQuantity: jest.fn(),
    removeAllProducts: jest.fn(),
    saveCartToLocalStorage: jest.fn()
  };
  const getters = {
    cartProducts: () => [],
    cartTotalPrice: () => 0
  };

  it("renders with empty card", () => {
    const store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(ShoppingCart, {
      store,
      localVue,
      stubs: {
        BIconCartFill,
        BIconTrashFill,
        bButton: "<button>button</button>"
      }
    });

    expect(wrapper.text()).toContain("Your shopping cart is empty");
  });

  it("renders with one item in the cart", () => {
    const store = new Vuex.Store({
      actions,
      getters: {
        ...getters,
        cartProducts: () => [
          {
            id: "1",
            name: "Name",
            price: 10,
            quantity: 1
          }
        ]
      }
    });
    const wrapper = shallowMount(ShoppingCart, {
      store,
      localVue,
      stubs: {
        BIconCartFill,
        BIconTrashFill,
        bButton: "<button>button</button>"
      }
    });

    expect(wrapper.text()).toContain("Remove all");
  });
});
