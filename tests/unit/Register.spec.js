import { shallowMount } from "@vue/test-utils";
import Register from "@/components/Register.vue";

describe("Register.vue", () => {
  it("renders Register.vue", () => {
    const wrapper = shallowMount(Register);
    expect(wrapper).toMatchSnapshot();
  });

  it("should display 'Register Form'", () => {
    const wrapper = shallowMount(Register);
    expect(wrapper.text()).toContain("Register Form");
  });
});
