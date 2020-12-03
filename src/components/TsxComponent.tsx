import { defineComponent, ref } from "vue";
import "./TsxStyle.styl";

// jsx文档：https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md
export default defineComponent({
  setup() {
    const msg = ref<string>("Vue3 + TypeScript + TSX");
    const array = Array(10)
      .fill(0)
      .map((it, i) => i);

    const clickLi = (e: Event) => {
      console.log("click", e);
    };

    return () => (
      <div class="tsx-test">
        <h1>{msg.value}</h1>
        <ul>
          {array.map((item, index) => (
            <li onClick={clickLi} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
});
