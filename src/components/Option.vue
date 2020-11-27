<template>
  <div class="option" :class="{ active: isActive }" @click="click">
    <slot>{{ label }}</slot>
  </div>
</template>

<script lang="ts">
import { DefineComponent, defineComponent } from "vue";

type THIS = DefineComponent<{}, {}, any>;

export default defineComponent({
  name: "Option",
  props: {
    label: String,
    value: String
  },
  computed: {
    inSelectComponent(this: THIS): boolean {
      const pr = this.$parent;
      return pr.$options.name === "Select";
    },
    isActive(this: THIS): boolean {
      const pr = this.$parent;
      return this.inSelectComponent && pr.value === this.value;
    }
  },
  setup(props) {
    return {
      click(this: THIS) {
        if (!this.inSelectComponent) return;
        this.$parent.clickOption(props.value);
      }
    };
  }
});
</script>

<style scoped lang="stylus">
.option {
  cursor: pointer;

  &.active {
    background: #0066ff;
    color: white;
    pointer-events: none;
  }
}
</style>
