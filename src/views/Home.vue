<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <New p1="hello world" :p2="{ a: 1, b: 2 }"></New>
    <Setup v-model:value="value"></Setup>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import New from "@/components/New.vue";
import Setup from "@/components/Setup.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    New,
    Setup
  },
  setup() {
    return reactive({value: 100});
  }
});
</script>
