import { defineComponent } from 'vue';
import { BackgroundWithCircle } from '../components/common/BackgroundWithCircle';
import { RoundButton } from '../components/common/RoundButton';
import { SquareButton } from '../components/common/SquareButton';
import { SvgIcon } from '../components/common/SvgIcon';
import s from './LoginPage.module.scss';

export const LoginPage = defineComponent({
  setup: () => {
    return () => (
      <>
        <BackgroundWithCircle>
          <div class={s.loginFormWrapper}>
            <div class={s.inputWrapper}>
              <SvgIcon class={s.svgIcon} name="email" color="#999999" />
              <input
                class={s.emailInput}
                type="text"
                placeholder="请输入邮箱地址"
              />
            </div>
            <div class={s.inputWrapper}>
              <SvgIcon class={s.svgIcon} name="key" color="#999999" />
              <input
                class={s.evcInput}
                type="text"
                placeholder="请输入验证码"
              />
              <RoundButton text='获取验证码' />
            </div>
            <SquareButton text="登录" />
          </div>
        </BackgroundWithCircle>
      </>
    );
  },
});
