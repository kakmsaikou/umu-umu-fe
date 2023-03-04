import { defineComponent, PropType } from 'vue';
import s from './BackgroundWithCircle.module.scss';
import NeroLogo from '../../assets/images/nero-logo.png';

export const BackgroundWithCircle = defineComponent({
  props: {
    neroText: {
      type: String,
      default: '　うむうむ！',
    },
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.bgCircle}/>
        <div class={s.neroWrapper}>
          <img class={s.neroLogo} src={NeroLogo} alt="" />
          <div class={s.neroText}>{props.neroText}</div>
        </div>
        {context.slots.default?.()}
      </div>
    );
  },
});
