<template>
  <div class="test-arr-props">
    <tpc :arr="arr"></tpc>
    <div @click="clickPlus">点击后arr[0].test++</div>
    <div @click="clickReplaceItem0">点击后arr[0] = {test: 10}</div>
    <div @click="clickPush">点击后arr push{test:arr.length}</div>
    <div @click="clickReplace">点击后arr = [{ test: 999 }]</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TestArrPropChild from "@/components/TestArrPropChild.vue";
export default defineComponent({
  components: { tpc: TestArrPropChild },
  setup() {
    const arr = reactive({ list: [{ test: 0 }] });
    return {
      arr: arr,
      clickPlus() {
        console.log("Plus");
        arr.list[0].test++;
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
      }
    };
  }
});
</script>

<style scoped></style>
