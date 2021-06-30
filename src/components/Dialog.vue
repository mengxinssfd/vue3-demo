<template>
  <transition>
    <teleport to="body" :disabled="toBody">
      <div class="dialog" v-show="visible">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="content">
          <slot>{{ label }}</slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </teleport>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dialog",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    toBody: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  setup() {
    return {};
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
