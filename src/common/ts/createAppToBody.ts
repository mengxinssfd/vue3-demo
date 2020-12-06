import { createApp, App } from "vue";
import { Component, ComponentPublicInstance } from "@vue/runtime-core";

// TODO rootProps应该限定于只能是component的props
export function createAppToBody<C extends Component>(
  rootComponent: C,
  rootProps?: Record<string, unknown> | null
): { app: App, ins: ComponentPublicInstance<C> } {
  const parent = document.body;
  const el = document.createElement("div");

  const app = createApp(rootComponent, rootProps);
  // TODO ins暂时无法列出组件里的属性
  const ins = app.mount(el) as ComponentPublicInstance<C>;

  parent.appendChild(ins.$el);
  return { app, ins };
}