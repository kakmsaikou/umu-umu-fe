import { defineComponent } from 'vue';
import s from './WordPage.module.scss';

export const WordPage = defineComponent({
  setup: () => {
    return () => (
      <div class={s.wrapper}>
        <div>
          <h1 class={s.word}>プール</h1>
          <p class={s.pronunciation}>ぷーる ①</p>
        </div>
        <div>
          <div class={s.meaning}>
            <p class={s.partOfSpeech}>名词</p>
            <p>pool人造泳池</p>
          </div>
          <ul class={s.examples}>
            <li>
              <p>室内プール。</p>
              <p>室内游泳池。</p>
            </li>
            <li>
              <p>温水プール。</p>
              <p>温水游泳池。</p>
            </li>
            <li>
              <p>プールで泳ぐ。</p>
              <p>在游泳池游泳。</p>
            </li>
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
