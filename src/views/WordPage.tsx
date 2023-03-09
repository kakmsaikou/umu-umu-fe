import { defineComponent } from 'vue';
import { FooterBar } from '../components/common/FooterBar';
import { innerHeightStyle } from '../utils/innerHeightStyle';
import s from './SettingPage.module.scss';

export const SettingPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper} style={innerHeightStyle()}>
        <button class={s.btnSearch}>查询</button>

        <div class={s.dictionaryListWrapper}>
          <div class={s.panel}>
            <h2>勉強中です</h2>
            <p>JLPT词汇N1</p>
          </div>

          <div class={s.panel}>
            <h2>辞书</h2>
            <ul class={s.dictionaryList}>
              <li>JLPT词汇N1</li>
              <li>JLPT词汇N1</li>
              <li>JLPT词汇N1</li>
              <li>JLPT词汇N1</li>
              <li>JLPT词汇N1</li>
              <li>JLPT词汇N1</li>
              <li>JLPT词汇N1</li>
              <li>JLPT词汇N1</li>
              <li>JLPT词汇N1</li>
            </ul>
          </div>
        </div>

        <FooterBar class={s.footBar} selected='word' />
      </div>
    );
  },
});

export default SettingPage;
