import { defineComponent } from 'vue';
import s from './BackgroundWithCircle.module.scss';

export const BackgroundWithCircle = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.bgCircle}></div>
        {context.slots.default?.()}
      </div>
    );
  },
});
