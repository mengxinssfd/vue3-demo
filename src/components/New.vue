<template>
  <div class="new">
    <div class="p1">{{ p1 }}</div>
    <div class="p2">{{ p2.a + p2.b }}</div>
  </div>
</template>

<script lang="ts" setup="props,ctx">
declare const props: {
  p1: string;
  p2: { a: number; b: number };
};
</script>

<style scoped></style>
