import { defineComponent, PropType } from 'vue';
import s from './FooterBar.module.scss';
import { SvgIcon } from './SvgIcon';

interface TabButton {
  name: TabItem;
  text: string;
  onClick: () => void;
}

export const FooterBar = defineComponent({
  props: {
    // selected SvgIcon.name url 一一对应
    selected: {
      type: String as PropType<TabItem>,
      required: true,
    },
  },
  setup: (props, context) => {
    const handleReview = () => {
      console.log('review');
    };
    const handleSelectWord = () => {
      console.log('select word');
    };
    const handleStatistics = () => {
      console.log('statistics');
    };
    const handleSetting = () => {
      console.log('setting');
    };

    const buttonList: TabButton[] = [
      {
        name: 'review',
        text: '复习',
        onClick: handleReview,
      },
      {
        name: 'word',
        text: '选词',
        onClick: handleSelectWord,
      },
      {
        name: 'statistics',
        text: '统计',
        onClick: handleStatistics,
      },
      {
        name: 'setting',
        text: '设置',
        onClick: handleSetting,
      },
    ];
    return () => (
      <ul class={s.wrapper}>
        {buttonList.map(item => {
          const isSelected = item.name === props.selected;
          return (
            <li class={isSelected ? s.selected : ''} onClick={item.onClick}>
              <SvgIcon class={s.svgIcon} name={item.name} />
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    );
  },
});
