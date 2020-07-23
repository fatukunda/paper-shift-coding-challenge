<template>
  <button class="button" @click="onClick">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      required: true
    },
    onClick: {
      type: Function,
      required: false
    }
  }
};
</script>

<style scoped>
.button {
  padding: 5px 10px;
  border: 0;
  font-size: 14px;
  background-color: #5cceb3;
  color: #ffffff;
  border-radius: 4px;
}
.button:focus {
  outline: 0;
}
.button:hover {
  background-color: #55b9a2;
}
</style>
