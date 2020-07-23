import { shallowMount } from "@vue/test-utils";
import Button from "@/components/_generics/Button.vue";

describe("Button.vue", () => {
  it("renders props.text is 'text'", () => {
    const text = "text";
    const onClick = jest.fn();
    const wrapper = shallowMount(Button, {
      propsData: { text, onClick }
    });
    expect(wrapper.text()).toMatch(text);
  });

  it("onClick should be called'", () => {
    const text = "text";
    const onClick = jest.fn();
    const wrapper = shallowMount(Button, {
      propsData: { text, onClick }
    });
    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
