import { defineComponent } from 'vue';
import { BackgroundWithCircle } from '../components/common/BackgroundWithCircle';
import s from './LoginPage.module.scss';

export const LoginPage = defineComponent({
  setup: () => {
    return () => <BackgroundWithCircle>
      <div>LoginPage</div>
    </BackgroundWithCircle>
  },
});