import { defineComponent, reactive } from 'vue';
import { FooterBar } from '../components/common/FooterBar';
import { SvgIcon } from '../components/common/SvgIcon';
import { Voice } from '../components/word/Voice';
import { innerHeightStyle } from '../utils/innerHeightStyle';
import s from './ReviewPage2.module.scss';

export const ReviewPage2 = defineComponent({
  setup: () => {
    const wordData: WordData = reactive({
      word_id: 1,
      word: 'プール',
      pronunciation: 'ぷーる ①',
      meaning: 'pool人造泳池',
      part_of_speech: '名词',
      language_pair_list: [
        {
          example: '室内プール。',
          translation: '室内游泳池。',
        },
        {
          example: '温水プール。',
          translation: '温水游泳池。',
        },
        {
          example: 'プールで泳ぐ。',
          translation: '在游泳池游泳。',
        },
      ],
    });

    const handleMenuClick = () => {
      console.log('menu click');
    };

    const handleVoiceClick = () => {
      console.log('voice click');
    };
    return () => (
      <div class={s.wrapper} style={innerHeightStyle()}>
        <div class={s.wordWrapper}>
          <SvgIcon class={s.menuIcon} name='menu' onClick={handleMenuClick} />
          <h1 class={s.word}>{wordData.word}</h1>
          <div class={s.pronunciation}>
            <span>{wordData.pronunciation}</span>
            <Voice class={s.voiceIcon} onClick={handleVoiceClick} />
          </div>
        </div>

        <div class={s.detailWrapper}>
          <p>请把日语发音和中文解释说出口</p>
          <p>点击屏幕显示答案</p>
        </div>

        <FooterBar class={s.footBar} selected='review' />
      </div>
    );
  },
});
