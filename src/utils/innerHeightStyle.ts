import { Ref } from 'vue';

// 没有需要减去的组件高度时，直接调用即可
// 有需要减去的组件高度时，传入组件的ref
export const innerHeightStyle = (offsetComp?: Ref) => {
  const offsetCompHeight = offsetComp?.value
    ? offsetComp.value.$el.clientHeight
    : 0;
  const innerHeight = window.innerHeight - offsetCompHeight;
  return `height:${innerHeight}px`;
};
