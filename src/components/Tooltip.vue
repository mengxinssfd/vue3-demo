<template>
  <div class="tooltip">
    <slot @mouseenter="onMouseenter"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

enum TriggerType {
  hover = "hover",
  click = "click"
}

export default defineComponent({
  name: "Tooltip",
  props: {
    trigger: {
      type: String as PropType<TriggerType>,
      default: TriggerType.hover
    }
  },
  setup(props, ctx) {
    return {
      onMouseenter() {
        console.log("mouse enter");
      }
    };
  }
});
</script>

<style scoped lang="stylus"></style>
