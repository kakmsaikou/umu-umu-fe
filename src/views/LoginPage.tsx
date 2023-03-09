import { defineComponent } from 'vue';
import { BackgroundWithCircle } from '../components/common/BackgroundWithCircle';
import { RoundButton } from '../components/common/RoundButton';
import { SquareButton } from '../components/common/SquareButton';
import { SvgIcon } from '../components/common/SvgIcon';
import s from './LoginPage.module.scss';

export const LoginPage = defineComponent({
  provide: {
    neroLogoText: '　うむうむ！',
  },
  setup: () => {
    const handleGetEvc = () => {
      console.log('获取验证码');
    };
    const handleLogin = () => {
      console.log('登录');
    };
    return () => (
      <>
        <BackgroundWithCircle>
          <form class={s.wrapper}>
            <div class={s.inputWrapper}>
              <SvgIcon class={s.svgIcon} name='email' />
              <input
                class={s.emailInput}
                type='text'
                placeholder='请输入邮箱地址'
              />
            </div>

            <div class={s.inputWrapper}>
              <SvgIcon class={s.svgIcon} name='key' />
              <input
                class={s.evcInput}
                type='text'
                placeholder='请输入验证码'
              />
              <RoundButton onClick={handleGetEvc} text='获取验证码' />
            </div>
            <SquareButton onClick={handleLogin} text='登录' />
          </form>
        </BackgroundWithCircle>
      </>
    );
  },
});

export default LoginPage;
