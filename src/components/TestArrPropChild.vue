<template>
  <div class="test-arr-prop">
    {{ arr }}
  </div>
</template>

<script lang="ts" setup="props,ctx">
import { watch } from "vue";

declare const props: {
  arr: { list: { test: number }[] };
};
watch(props.arr, n => {
  console.log(n);
});
</script>

<style scoped></style>
