import { defineComponent, inject } from 'vue';
import s from './NeroLogoWithText.module.scss';
import NeroLogo from '../../assets/images/nero-logo.png';

export const NeroLogoWithText = defineComponent({
  setup: (props, context) => {
    const neroLogoText = inject('neroLogoText', '需要 provide.neroLogoText');
    return () => (
      <div class={s.wrapper}>
        <img class={s.neroLogo} src={NeroLogo} alt='' />
        <div class={s.neroText}>{neroLogoText}</div>
      </div>
    );
  },
});
