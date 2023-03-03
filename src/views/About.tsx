import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import s from './About.module.scss';

export const About = defineComponent({
  setup: () => {
    return () =>       <>
    <div>About</div>
    <RouterLink to="/"><button>toHome</button></RouterLink>
  </>
  },
});