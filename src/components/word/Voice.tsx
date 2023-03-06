import { defineComponent, PropType } from 'vue';
import { SvgIcon } from '../common/SvgIcon';
import s from './Voice.module.scss';

export const Voice = defineComponent({
  props: {
    onClick: Function as PropType<() => void>,
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper} onClick={props.onClick}>
        <div class={s.svgIconList}>
          <SvgIcon class={s.svgIcon} name='voice1' />
          <SvgIcon class={s.svgIcon} name='voice2' />
          <SvgIcon class={s.svgIcon} name='voice3' />
        </div>
      </div>
    );
  },
});
