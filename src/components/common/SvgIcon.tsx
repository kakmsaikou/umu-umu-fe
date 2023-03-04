import { computed, defineComponent } from 'vue';
import s from './SvgIcon.module.scss';

export const SvgIcon = defineComponent({
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup: props => {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return () => (
      <svg class={s.svgTag} aria-hidden="true">
        <use xlinkHref={symbolId.value} fill={props.color} />
      </svg>
    );
  },
});
