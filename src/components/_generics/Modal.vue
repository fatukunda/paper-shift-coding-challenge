<template functional>
  <div>
    <b-modal
      id="main-modal"
      :title="title"
      size="md"
      header-close-variant="info"
      :hide-footer="true"
    >
      <slot></slot>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style></style>
