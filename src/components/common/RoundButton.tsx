import { defineComponent } from 'vue';
import s from './RoundButton.module.scss';

export const RoundButton = defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    return () => (
      <button class={s.roundButton}>{props.text}</button>
    );
  },
});
