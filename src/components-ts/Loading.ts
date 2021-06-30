// loading/index.js
import { ref } from "vue";
import LoadingComponent from "@/components/Loading.vue";
import { createAppToBody } from "@/common/ts/createAppToBody";

let loading: { close: () => void } | undefined = undefined;
let closeTimer: number;
// fixme 使用reactive函数生成的object传递给组件不会响应
// const re = reactive({value: true, msg: ""});
const visible = ref(false);

export default function(msg?: string) {
  if (loading) {
    visible.value = true;
    clearTimeout(closeTimer);
    return loading;
  }
  visible.value = false;

  const { app, ins } = createAppToBody(LoadingComponent, {
    value: visible,
    msg
  });

  ins.$nextTick(() => {
    visible.value = true;
  });

  return (loading = {
    close() {
      visible.value = false;
      closeTimer = setTimeout(() => {
        loading = undefined;
        app.unmount(ins.$el);
      }, 500);
    }
  });
}
