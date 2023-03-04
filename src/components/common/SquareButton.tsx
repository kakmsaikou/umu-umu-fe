import { defineComponent, PropType } from 'vue';
import s from './SquareButton.module.scss';

export const SquareButton = defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    onClick: Function as PropType<() => void>,
  },
  setup: props => {
    return () => (
      <button class={[s.squareButton]} onClick={props.onClick}>
        {props.text}
      </button>
    );
  },
});
