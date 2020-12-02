<template>
  <transition name="custom-loading-fade">
    <!--loading蒙版-->
    <div v-show="visible" class="custom-loading-mask">
      <!--loading中间的图标-->
      <div class="custom-loading-spinner">
        <i class="custom-spinner-icon"></i>
        <!--loading上面显示的文字-->
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, ctx) {
    const text = ref("");
    const visible = ref(false);
    return {
      text,
      visible,
      switch() {
        visible.value = !visible.value;
      }
    };
  }
});
</script>
<style lang="stylus">
.custom-loading-fade-enter-active,
.custom-loading-fade-leave-active {
  transition: all 0.3s ease-in;
}
.custom-loading-fade-enter,
.custom-loading-fade-leave-to {
  opacity: 0;
}
.custom-loading-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100000;
}
</style>
