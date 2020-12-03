// loading/index.js
import { createApp, ComponentPublicInstance } from 'vue';
import LoadingComponent from "@/components/Loading.vue";

let loading: { close: () => void } | undefined = undefined;
let instance: ComponentPublicInstance<typeof LoadingComponent> | undefined = undefined;
let closeTimer: number;
const Loading = (msg?: string) => {
  if (loading && instance) {
    clearTimeout(closeTimer);
    instance.show(msg);
    return loading;
  }
  const parent = document.body;
  const el = document.createElement('div');

  const app = createApp(LoadingComponent, {value: true, msg});

  const ins = app.mount(el) as ComponentPublicInstance<typeof LoadingComponent>;
  instance = ins;
  parent.appendChild(ins.$el);

  return loading = {
    close() {
      ins.hide();
      closeTimer = setTimeout(() => {
        loading = undefined;
        instance = undefined;
        app.unmount(el);
      }, 500);
    }
  };
};

export default Loading;
