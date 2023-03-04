import { defineComponent } from 'vue';
import s from './SquareButton.module.scss';

export const SquareButton = defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    return () => <button class={[s.squareButton]}>{props.text}</button>;
  },
});
