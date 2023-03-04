import { defineComponent, PropType } from 'vue';
import s from './RoundButton.module.scss';

export const RoundButton = defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    onClick: Function as PropType<() => void>,
  },
  setup: (props) => {
    return () => (
      <button class={s.roundButton} onClick={props.onClick}>{props.text}</button>
    );
  },
});
