import { defineComponent, reactive, ref } from 'vue';
import { FooterBar } from '../components/common/FooterBar';
import { SvgIcon } from '../components/common/SvgIcon';
import { Voice } from '../components/reviews/Voice';
import { innerHeightStyle } from '../utils/innerHeightStyle';
import s from './ReviewPage.module.scss';

export const ReviewPage = defineComponent({
  setup: (props, context) => {
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

    const applyEmphasis = (example: string, word: string) => {
      const emphasizedWord = `<strong class=${s.emphasis}>${word}</strong>`;
      return example.replace(word, emphasizedWord);
    };

    const buttonList = [
      {
        text: '认识',
        onClick: () => {
          handleDetailClick();
          console.log('认识');
        },
      },
      {
        text: '不确定',
        onClick: () => {
          handleDetailClick();
          console.log('不确定');
        },
      },
      {
        text: '不认识',
        onClick: () => {
          handleDetailClick();
          console.log('不认识');
        },
      },
    ];

    const refDetailShown = ref(false);
    const handleDetailClick = () => {
      refDetailShown.value = !refDetailShown.value;
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

        <div
          class={s.detailMask}
          onClick={handleDetailClick}
          v-show={!refDetailShown.value}
        >
          <p>请把日语发音和中文解释说出口</p>
          <p>点击屏幕显示答案</p>
        </div>

        <div class={s.detailWrapper} v-show={refDetailShown.value}>
          <div class={s.meaning}>
            <h2>释义</h2>
            <p class={s.partOfSpeech}>{wordData.part_of_speech}</p>
            <p>{wordData.meaning}</p>
          </div>
          <div class={s.exampleListWrapper}>
            <h2>例句</h2>
            <ul class={s.examplesList}>
              {wordData.language_pair_list.map(item => {
                const htmlCode = applyEmphasis(item.example, wordData.word);
                return (
                  <li>
                    <p v-html={htmlCode} />
                    <p class={s.translation}>{item.translation}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <ul class={s.buttonListWrapper} v-show={refDetailShown.value}>
          {buttonList.map(item => {
            return (
              <li>
                <button onClick={item.onClick}>{item.text}</button>
              </li>
            );
          })}
        </ul>

        <FooterBar class={s.footBar} selected='review' />
      </div>
    );
  },
});

export default ReviewPage;