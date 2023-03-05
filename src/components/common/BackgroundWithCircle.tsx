import { defineComponent } from 'vue';
import s from './BackgroundWithCircle.module.scss';
import { NeroLogoWithText } from './NeroLogoWithText';

export const BackgroundWithCircle = defineComponent({
  props: {
    neroText: String,
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.bgCircle} />
        
        <div class={s.mainContent}>
          <NeroLogoWithText
            class={s.NeroLogoWithText}
            neroText={props.neroText}
          />
          {context.slots.default?.()}
        </div>
      </div>
    );
  },
});
