// loading/index.js
import { createApp, ComponentPublicInstance, reactive } from "vue";
import LoadingComponent from "@/components/Loading.vue";

let loading: { close: () => void } | undefined = undefined;
let closeTimer: number;
// fixme 使用reactive函数生成的object传递给组件不会响应
const re = reactive({ value: true, msg: "" });

export default function(msg?: string) {
  re.value = true;
  re.msg = msg ?? re.msg;
  if (loading) {
    clearTimeout(closeTimer);
    return loading;
  }
  const parent = document.body;
  const el = document.createElement("div");

  const app = createApp(LoadingComponent, re);
  const ins = app.mount(el) as ComponentPublicInstance<typeof LoadingComponent>;

  parent.appendChild(ins.$el);

  return (loading = {
    close() {
      re.value = false;
      closeTimer = setTimeout(() => {
        loading = undefined;
        app.unmount(el);
      }, 500);
    }
  });
}
