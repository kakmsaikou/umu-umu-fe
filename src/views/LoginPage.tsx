import { defineComponent } from 'vue';
import s from './LoginPage.module.scss';

export const LoginPage = defineComponent({
  setup: () => {
    return () => <div class={s.wrapper}>
      <div class={s.bgCircle}></div>
      <div>LoginPage</div>
    </div>;
  },
});