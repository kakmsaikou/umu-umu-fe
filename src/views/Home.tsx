import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export const Home = defineComponent({
  setup: () => {
    return () => (
      <>
        <div>Home</div>
        <RouterLink to="/about">
          <button>toAbout</button>
        </RouterLink>
      </>
    );
  },
});
