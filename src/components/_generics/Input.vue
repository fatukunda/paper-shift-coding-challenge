<template functional>
  <b-form-group>
    <b-form-input
      v-model="value"
      :type="type"
      :required="required"
      :placeholder="placeholder"
    ></b-form-input>
  </b-form-group>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: true,
      defaultStatus: true
    }
  }
};
</script>

<style></style>
