<!--
<template>
  <div class="tooltip">
    <slot @mouseenter="onMouseenter"></slot>
    <slot name="content"></slot>
  </div>
</template>
-->

<script lang="ts">
import { defineComponent, PropType, h } from "vue";

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
  },
  render(this: any) {
    const { $slots } = this;
    const showContent = () => {
      console.log(this.$slots.default());
    };
    const trigger = (type: TriggerType) => {
      if (type !== this.trigger) return;
      showContent();
    };
    const onMouseEnter = (e: Event) => {
      trigger(TriggerType.hover);
    };
    const onClick = () => {
      trigger(TriggerType.click);
    };
    return h($slots.default, {
      // return h("div", {
      onMouseEnter: onMouseEnter,
      onClick: onClick
    });
  }
});
</script>

<style scoped lang="stylus"></style>
