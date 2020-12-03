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
import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  props: {
    msg: String,
    value: Boolean
  },
  setup(props, ctx) {
    const pr = toRefs(props);
    const text = ref(pr.msg?.value ?? "loading");
    const visible = ref(pr.value.value);

    function setVisible(value: boolean) {
      visible.value = value;
      ctx.emit("update:value", value);
    }

    return {
      text,
      visible,
      show(msg?: string) {
        text.value = msg ?? text.value;
        setVisible(true);
      },
      hide() {
        setVisible(false);
      }
    };
  }
});
</script>
<style lang="stylus">
.custom-loading-fade-enter-active,
.custom-loading-fade-leave-active {
  transition: opacity 0.3s linear;
}

.custom-loading-fade-enter-from,
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

.custom-loading-spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;

  .custom-loading-text:after {
    margin-left: 4px;
    letter-spacing: 4px;
    animation: 2s linear infinite running loading-end;
    content: "...";
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes loading-end {
  0% {
    content: "...";
  }
  25% {
    content: "·..";
  }
  50% {
    content: ".·.";
  }
  75% {
    content: "..·";
  }
  100% {
    content: "...";
  }
}
</style>
