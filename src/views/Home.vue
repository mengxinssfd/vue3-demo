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
    <Select v-model:value="re.selectValue">
      <Option
        v-for="(item, index) in re.dateOptions"
        :key="index"
        :value="item.value"
      >
        {{ item.label }}
      </Option>
    </Select>
    <div
      class="tsx-wrapper"
      style="position: relative"
      @click="loadingVisible = !loadingVisible"
    >
      <Loading :value="loadingVisible"></Loading>
      <TsxComponent></TsxComponent>
    </div>
    <Tooltip>
      <button>tooltip</button>
    </Tooltip>
    <TestArrProp :arr="arr"></TestArrProp>
    <div @click="arr1Plus">click arr[1]++</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import New from "@/components/New.vue";
import Setup from "@/components/Setup.vue";
import Loading from "@/components/Loading.vue";
import loading from "@/components-ts/Loading";
import TestArrProp from "@/components/TestArrProp.vue";
// import Switch, { active } from "@/components/Switch.vue";
import Switch from "@/components/Switch.vue";
import test, { testObj } from "@/utils/test";
import Select from "@/components/Select.vue";
import Option from "@/components/Option.vue";
import TsxComponent from "@/components/TsxComponent";
import Tooltip from "@/components/Tooltip.vue";

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
    Switch,
    Select,
    Option,
    TsxComponent,
    Loading,
    Tooltip,
    TestArrProp
  },
  setup() {
    const ld = loading("loading");
    const re = reactive({
      value: 100,
      selectValue: "3",
      dateOptions
    });
    const selectedDate = ref(dateOptions[0].value);

    watch(selectedDate, function(n, o) {
      console.log(n, o);
    });

    test(testObj.value);
    const arr = reactive([{ test: 1 }]);
    setTimeout(() => {
      ld.close();
      setTimeout(loading, 200);
      setTimeout(ld.close, 3000);
    }, 1000);
    return {
      loadingVisible: ref(true),
      re,
      selectedDate,
      // active,
      clickSearch() {
        console.log("search", selectedDate.value);
      },
      arr,
      arr1Plus() {
        const item = arr[0];
        console.log(item);
        item.test++;
      }
    };
  }
});
</script>
