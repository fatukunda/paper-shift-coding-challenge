import { shallowMount, mount } from "@vue/test-utils";
import CartItem from "@/components/CartItem.vue";
import {
  BIconArrowUpCircleFill,
  BIconArrowDownCircleFill
} from "bootstrap-vue";

const props = {
  id: "1",
  name: "Name",
  price: 10,
  quantity: 1
};
describe("CartItem.vue", () => {
  it("renders with given props", () => {
    const wrapper = shallowMount(CartItem, {
      propsData: { ...props },
      stubs: {
        BIconArrowUpCircleFill,
        BIconArrowDownCircleFill
      }
    });
    expect(wrapper.text()).toContain(props.name);
    expect(wrapper.text()).toContain(`${props.price}$ each`);
    expect(wrapper.text()).toContain(`Quantity: ${props.quantity}`);
  });

  it("should emit increamentQuantity", async () => {
    const wrapper = mount(CartItem, {
      propsData: { ...props },
      stubs: {
        BIconArrowUpCircleFill,
        BIconArrowDownCircleFill
      }
    });
    await wrapper.find(".arrow").trigger("click");
    expect(wrapper.emitted().increamentQuantity[0]).toEqual([props]);
  });
});
