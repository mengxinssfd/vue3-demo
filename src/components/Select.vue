<template>
  <div class="select">
    <input type="text" readonly :value="value" @change="clickOption" />
    <slot :active="value"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Select",
  props: {
    value: String
  },
  setup(props, ctx) {
    return {
      clickOption(value: string) {
        ctx.emit("update:value", value);
      }
    };
  }
});
</script>

<style scoped></style>
