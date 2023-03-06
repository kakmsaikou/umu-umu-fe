import { defineComponent, reactive } from 'vue';
import { FooterBar } from '../components/common/FooterBar';
import { SvgIcon } from '../components/common/SvgIcon';
import s from './WordPage.module.scss';

export const WordPage = defineComponent({
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

    const applyEmphasis = (example: string, word: string) => {
      const emphasizedWord = `<strong class=${s.emphasis}>${word}</strong>`;
      return example.replace(word, emphasizedWord);
    };

    return () => (
      <div class={s.wrapper}>
        <SvgIcon class={s.menuIcon} name='menu' />
        <div class={s.wordWrapper}>
          <h1 class={s.word}>{wordData.word}</h1>
          <div class={s.pronunciation}>
            {wordData.pronunciation}
            <SvgIcon class={s.voiceIcon} name='voice' />
          </div>
        </div>

        <div class={s.detailWrapper}>
          <div class={s.meaning}>
            <h2>释义</h2>
            <p class={s.partOfSpeech}>{wordData.part_of_speech}</p>
            <p>{wordData.meaning}</p>
          </div>

          <div class={s.examples}>
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

        <ul class={s.buttonsWrapper}>
          <li>
            <button>认识</button>
          </li>
          <li>
            <button>不确定</button>
          </li>
          <li>
            <button>不认识</button>
          </li>
        </ul>

        <FooterBar selected='review'/>
      </div>
    );
  },
});
