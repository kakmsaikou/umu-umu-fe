import { defineComponent, reactive } from 'vue';
import s from './WordPage.module.scss';

export const WordPage = defineComponent({
  setup: () => {
    const wordData = reactive({
      word_id: 1,
      word: 'プール',
      pronunciation: 'ぷーる ①',
      meaning: 'pool人造泳池',
      part_of_speech: '名词',
      examples: [
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
    return () => (
      <div class={s.wrapper}>
        <div>
          <h1 class={s.word}>{wordData.word}</h1>
          <p class={s.pronunciation}>{wordData.pronunciation}</p>
        </div>
        <div>
          <div class={s.meaning}>
            <p class={s.partOfSpeech}>{wordData.part_of_speech}</p>
            <p>{wordData.meaning}</p>
          </div>
          <ul class={s.examples}>
            {wordData.examples.map(example => (
              <li>
                <p>{example.example}</p>
                <p>{example.translation}</p>
              </li>
            ))}
          </ul>
        </div>
        <ul>
          <li>认识</li>
          <li>不确定</li>
          <li>不认识</li>
        </ul>
        <ul class={s.footerBar}>
          <li>复习</li>
          <li>选词</li>
          <li>统计</li>
          <li>设置</li>
        </ul>
      </div>
    );
  },
});
