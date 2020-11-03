<template>
  <div class="new">
    <div class="p2">p1:{{p1 }}</div>
    <div class="p1" @click="add">new:点击增加 {{ calc }}</div>
    <div class="p2">p2 a + b:{{ p2.a + p2.b }}</div>
  </div>
</template>

<script lang="ts" setup="props,ctx">
import { ref, computed } from "vue";

declare const props: {
  p1: string;
  p2: { a: number; b: number };
};
export const p3 = ref(0);

export function add() {
  p3.value++;
}

export const calc = computed(() => props.p1 + p3.value);
</script>

<style scoped></style>
