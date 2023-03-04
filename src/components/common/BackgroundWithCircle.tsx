import { defineComponent, PropType } from 'vue';
import s from './BackgroundWithCircle.module.scss';

export const BackgroundWithCircle = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.bgCircle}/>
        {context.slots.default?.()}
      </div>
    );
  },
});
