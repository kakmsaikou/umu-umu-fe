import { defineComponent, inject } from 'vue';
import s from './NeroLogoWithText.module.scss';
import NeroLogo from '../../assets/images/nero-logo.png';

export const NeroLogoWithText = defineComponent({
  inject: ['neroLogoText'],
  setup: (props, context) => {
    const neroLogoText = inject('neroLogoText', '　うむうむ！');
    return () => (
      <div class={s.wrapper}>
        <img class={s.neroLogo} src={NeroLogo} alt='' />
        <div class={s.neroText}>{neroLogoText}</div>
      </div>
    );
  },
});
