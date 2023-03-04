import { defineComponent } from 'vue';
import s from './NeroLogoWithText.module.scss';
import NeroLogo from '../../assets/images/nero-logo.png';

export const NeroLogoWithText = defineComponent({
  props: {
    neroText: {
      type: String,
      default: '　うむうむ！',
    },
  },
  setup: props => {
    return () => (
      <div class={s.wrapper}>
        <img class={s.neroLogo} src={NeroLogo} alt="" />
        <div class={s.neroText}>{props.neroText}</div>
      </div>
    );
  },
});
