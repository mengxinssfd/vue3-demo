import { PropType } from "vue";

export type option = { [key: string]: any };
export const CommonProps = {
  options: {
    type: Array as PropType<option[]>,
    required: true
  },
  label: {
    type: String as PropType<keyof option>,
    default: "label"
  },
  value: {
    type: String as PropType<keyof option>,
    default: "key"
  }
};