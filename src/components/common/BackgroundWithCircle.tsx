import { defineComponent } from 'vue';
import s from './BackgroundWithCircle.module.scss';
import { NeroLogoWithText } from './NeroLogoWithText';

export const BackgroundWithCircle = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.bgCircle} />

        <div class={s.mainContent}>
          <NeroLogoWithText class={s.NeroLogoWithText} />
          {context.slots.default?.()}
        </div>
      </div>
    );
  },
});
