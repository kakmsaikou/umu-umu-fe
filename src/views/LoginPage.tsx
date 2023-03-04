import { defineComponent } from 'vue';
import { BackgroundWithCircle } from '../components/common/BackgroundWithCircle';
import s from './LoginPage.module.scss';

export const LoginPage = defineComponent({
  setup: () => {
    return () => (
      <>
        <BackgroundWithCircle>
          <div class={s.loginFormWrapper}></div>
        </BackgroundWithCircle>
      </>
    );
  },
});
