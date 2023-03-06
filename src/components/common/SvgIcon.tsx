import { computed, defineComponent, PropType } from 'vue';
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
    onClick: Function as PropType<() => void>,
  },
  setup: props => {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return () => (
      <svg class={s.svgTag} onClick={props.onClick} aria-hidden='true'>
        <use xlinkHref={symbolId.value} />
      </svg>
    );
  },
});
