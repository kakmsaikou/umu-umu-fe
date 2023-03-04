import { defineComponent } from 'vue';
import { BackgroundWithCircle } from '../components/common/BackgroundWithCircle';
import s from './LoginPage.module.scss';
import NeroLogo from '../assets/images/NeroLogo.png'

export const LoginPage = defineComponent({
  setup: () => {
    return () => <BackgroundWithCircle>
      <img class={s.neroLogo} src={NeroLogo} alt="" />
      <div>LoginPage</div>
    </BackgroundWithCircle>
  },
});