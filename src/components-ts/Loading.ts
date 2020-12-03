// loading/index.js
import { createApp, ComponentPublicInstance, ref } from 'vue';
import LoadingComponent from "@/components/Loading.vue";

let loading: { close: () => void } | undefined = undefined;
let closeTimer: number;
const visible = ref(true);

export default function (msg?: string) {
  visible.value = true;
  if (loading) {
    clearTimeout(closeTimer);
    return loading;
  }
  const parent = document.body;
  const el = document.createElement('div');

  const app = createApp(LoadingComponent, {value: visible, msg});
  const ins = app.mount(el) as ComponentPublicInstance<typeof LoadingComponent>;

  parent.appendChild(ins.$el);

  return loading = {
    close() {
      visible.value = false;
      closeTimer = setTimeout(() => {
        loading = undefined;
        app.unmount(el);
      }, 500);
    }
  };
};
