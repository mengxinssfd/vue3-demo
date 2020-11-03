<template>
  <div class="setup" @click="clickValue">setup:点击增加{{ value }}</div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";

export default defineComponent({
  name: "setup",
  props: {
    value: Number
  },
  setup(props, ctx) {
    const ps = toRefs(props);
    console.log("props", ps);
    const re = reactive({ v1: 1, v2: 2 });
    return {
      re,
      clickValue() {
        ctx.emit("update:value", props.value! + 1);
      }
    };
  }
});
</script>

<style scoped></style>
