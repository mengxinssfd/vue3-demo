<template>
  <div class="test-arr-prop">list[0]: {{ arr.list[0] }}</div>
</template>

<script lang="ts" setup="props,ctx">
import { watch } from "vue";

declare const props: {
  arr: { list: { test: number }[] };
};
watch(props.arr, n => {
  console.log("watch", n);
});
</script>

<style scoped></style>
