// loading/index.js
import { createApp, ComponentPublicInstance, reactive, ref } from "vue";
import LoadingComponent from "@/components/Loading.vue";

let loading: { close: () => void } | undefined = undefined;
let closeTimer: number;
// fixme 使用reactive函数生成的object传递给组件不会响应
// const re = reactive({value: true, msg: ""});
const visible = ref(false);

export default function (msg?: string) {
  if (loading) {
    visible.value = true;
    clearTimeout(closeTimer);
    return loading;
  }
  visible.value = false;
  const parent = document.body;
  const el = document.createElement("div");

  const app = createApp(LoadingComponent, {value: visible, msg});
  const ins = app.mount(el) as ComponentPublicInstance<typeof LoadingComponent>;

  parent.appendChild(ins.$el);

  const a = 100_000_000

  ins.$nextTick(() => {
    visible.value = true;
  });

  return (loading = {
    close() {
      visible.value = false;
      closeTimer = setTimeout(() => {
        loading = undefined;
        app.unmount(el);
      }, 500);
    }
  });
}
