<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <New p1="hello world" :p2="{ a: 1, b: 2 }"></New>
<!--    <div>active {{ active }}</div>-->
    <Setup v-model:value="re.value"></Setup>
    <Switch
      v-model:selectedValue="selectedDate"
      :options="re.dateOptions"
      @change="clickSearch"
    ></Switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import New from "@/components/New.vue";
import Setup from "@/components/Setup.vue";
// import Switch, { active } from "@/components/Switch.vue";
import Switch from "@/components/Switch.vue";
import test, { testObj } from "@/utils/test";

const dateOptions = [
  /*{
    label: '当前',
    value: '1'
  },*/
  {
    label: "昨天",
    value: "2"
  },
  {
    label: "近7天",
    value: "3"
  },
  {
    label: "近14天",
    value: "4"
  },
  {
    label: "近30天",
    value: "5"
  },
  {
    label: "本月",
    value: "6"
  },
  {
    label: "上月",
    value: "7"
  }
];
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    New,
    Setup,
    Switch
  },
  setup() {
    const re = reactive({
      value: 100,
      dateOptions
    });
    const selectedDate = ref(dateOptions[0].value);

    watch(selectedDate, function(n, o) {
      console.log(n, o);
    });

    test(testObj.value);

    return {
      re,
      selectedDate,
      // active,
      clickSearch() {
        console.log("search", selectedDate.value);
      }
    };
  }
});
</script>
