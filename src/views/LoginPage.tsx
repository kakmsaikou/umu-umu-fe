import { defineComponent } from 'vue';
import { BackgroundWithCircle } from '../components/common/BackgroundWithCircle';
import { SvgIcon } from '../components/common/SvgIcon';
import s from './LoginPage.module.scss';

export const LoginPage = defineComponent({
  setup: () => {
    return () => (
      <>
        <BackgroundWithCircle>
          <div class={s.loginFormWrapper}>
            <SvgIcon name='email' color='#999999'/>
          </div>
        </BackgroundWithCircle>
      </>
    );
  },
});
