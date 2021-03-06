<template>
  <ul class="demo-switch">
    <li
      class="active-background"
      :style="{ left: (active / options.length) * 100 + '%' }"
    ></li>
    <li
      class="item"
      v-for="(item, index) in options"
      :class="{ active: active === index }"
      @click="clickItem(index)"
      :key="item.value"
    >
      {{ item[label] }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";

type option = { label: string; value: string };

/*declare const props: {
  options: option[];
  label: keyof option;
  value: keyof option;
}*/

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<option[]>,
      required: true
    },
    label: {
      type: String as PropType<keyof option>,
      default: "label"
    },
    value: {
      type: String as PropType<keyof option>,
      default: "value"
    }
  },
  setup(props, ctx) {
    const active = ref(0);
    return {
      active,
      clickItem(index: number) {
        active.value = index;
        const item = props.options[index];
        ctx.emit("update:selectedValue", item[props.value]);
        ctx.emit("change", { index: index, ...item });
      }
    };
  }
});
</script>

<style scoped lang="stylus">
.demo-switch {
  list-style: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  $h = 36px;
  $p = 3px;
  height: $h;
  padding: $p 0;
  box-sizing: border-box;
  background: #f2f4f7;
  border-radius: 4px;

  li {
    $w = 90px;
    width: $w;
    line-height: ($h - $p * 2);
    height: ($h - $p * 2);
    $t = 0.2s;

    &.item {
      position: relative;
      z-index: 1;
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      text-align: center;
      transition: color $t ease-out;
      cursor: pointer;

      &.active {
        color: white;
        cursor: default;
        pointer-events: none;
      }
    }

    &.active-background {
      position: absolute;
      z-index: 0;
      top: $p;
      margin-left: $p;
      width: ($w - $p * 2);
      background: #0066ff;
      transition: left $t ease-out;
      border-radius: 4px;
    }
  }
}
</style>
