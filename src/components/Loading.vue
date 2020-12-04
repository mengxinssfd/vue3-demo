<template>
  <transition name="custom-loading-fade">
    <!--loading蒙版-->
    <div v-show="visible" class="custom-loading-mask">
      <div class="custom-loading-content">
        <!--loading中间的图标-->
        <div class="custom-loading-spinner">
          <svg viewBox="25 25 50 50" class="circular">
            <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
          </svg>
        </div>
        <!--loading下面显示的文字-->
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, watch, PropType } from "vue";

export default defineComponent({
  props: {
    msg: String,
    value: {
      type: [Boolean, Object /*Proxy*/] as PropType<boolean>,
      required: true
    }
  },
  setup(props, ctx) {
    const pr = toRefs(props);
    const text = ref(pr.msg?.value ?? "");
    const visible = ref<boolean>(false);
    watch(
      pr.value,
      n => {
        console.log("cccccccccccccc");
        visible.value = n;
      },
      {immediate: true}
    );

    function setText(msg: string) {
      ctx.emit("update:msg", msg);
      text.value = msg;
    }

    function setVisible(value: boolean) {
      visible.value = value;
      ctx.emit("update:value", value);
    }

    return {
      text,
      visible,
      setText(msg?: string) {
        if (typeof msg === "string") {
          setText(msg);
        }
      },
      show() {
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
body > .custom-loading-mask {
  position: fixed;
}
.custom-loading-mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100000;
}
.custom-loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  .custom-loading-text {
    text-align: center;
    &:after {
      margin-left: 4px;
      letter-spacing: 4px;
      animation: 2s linear infinite running loading-end;
      content: "...";
    }
  }
}
.custom-loading-spinner {
  .circular {
    height: 42px;
    width: 42px;
    animation: loading-rotate 2s linear infinite;
    .path {
      animation: loading-dash 1.5s ease-in-out infinite;
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      stroke-width: 2;
      //stroke: #409eff;
      stroke: white;
      stroke-linecap: round;
    }
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
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
@keyframes loading-rotate {
  100% {
    transform: rotate(1turn);
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
