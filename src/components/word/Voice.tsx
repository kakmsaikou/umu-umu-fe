import { defineComponent } from 'vue';
import { SvgIcon } from '../common/SvgIcon';
import s from './Voice.module.scss';

export const Voice = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.svgIconList}>
          <SvgIcon class={s.svgIcon} name='voice1' />
          <SvgIcon class={s.svgIcon} name='voice2' />
          <SvgIcon class={s.svgIcon} name='voice3' />
        </div>
      </div>
    );
  },
});
