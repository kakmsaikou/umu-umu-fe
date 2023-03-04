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
            <div>
              <SvgIcon name="email" color="#999999" />
              <input type="text" placeholder="请输入邮箱地址" />
            </div>
            <div>
              <SvgIcon name="key" color="#999999" />
              <input type="text" placeholder="请输入验证码" />
              <button>获取验证码</button>
            </div>
            <button>登陆</button>
          </div>
        </BackgroundWithCircle>
      </>
    );
  },
});
