import { defineComponent } from 'vue';
import s from './BackgroundWithCircle.module.scss';
import NeroLogo from '../../assets/images/nero-logo.png'


export const BackgroundWithCircle = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.bgCircle}></div>
        <img class={s.neroLogo} src={NeroLogo} alt="" />
        {context.slots.default?.()}
      </div>
    );
  },
});
