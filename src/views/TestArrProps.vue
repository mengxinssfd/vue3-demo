<template>
  <div class="test-arr-props">
    <tpc :arr="list"></tpc>
    <div>index {{ arr.index }}</div>
    <div @click="clickPlus">点击后arr2[0].test++</div>
    <div @click="clickReplaceItem0">点击后arr[0] = {test: 10}</div>
    <div @click="clickPush">点击后arr push{test:arr.length}</div>
    <div @click="clickReplace">点击后arr = [{ test: 999 }]</div>
    <div @click="clickIndexPlus">点击后index++</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import TestArrPropChild from "@/components/TestArrPropChild.vue";

export default defineComponent({
  components: { tpc: TestArrPropChild },
  setup() {
    // 1.数组如果reactive([{ test: 0 }]) 那么在子组件中将不能监听替换数组操作,只能传object并修改数组或清理数组重新push
    // 2.如果子组件中接收一个响应式数组，那么中途换掉那个响应式数组，子组件监听的还是原来的数组
    const arr = reactive({ list: [{ test: 0 }], index: 0 });
    const arr2 = reactive({ list: [{ test: 666 }] });
    const list = computed(() => {
      return arr.index < 1 ? arr : arr2;
    });
    return {
      arr: arr,
      arr2,
      list,
      clickPlus() {
        console.log("Plus");
        arr2.list[0].test++;
      },
      clickPush() {
        console.log("Push");
        arr.list.push({ test: arr.list.length });
      },
      clickReplaceItem0() {
        console.log("ReplaceItem0");
        arr.list[0] = { test: 10 };
      },
      clickReplace() {
        console.log("Replace");
        arr.list = [{ test: 999 }];
      },
      clickIndexPlus() {
        console.log("IndexPlus");
        arr.index++;
      }
    };
  }
});
</script>

<style scoped></style>
