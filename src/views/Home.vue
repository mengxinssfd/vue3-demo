<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <New p1="hello world" :p2="{a:1,b:2}"></New>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import New from "@/components/New.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    New,
  },
});
</script>
