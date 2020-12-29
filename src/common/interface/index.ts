import { ReactComponentElement } from 'react';

export interface Graph {}

export interface GraphConfig {
  /* 缩放 */
  zoom?: boolean;
  /* 标尺 */
  scale?: boolean;
  /* 网格 */
  grid?: boolean;
  /* 拖拽 */
  drag?: boolean;
  /* 框选 */
  choose?: boolean;
}

export interface FlowData {
  node: any[];
}

/* 允许的组件名称 */
export type editorComponentTname = 'FLOW' | 'TOOL' | 'NODEPANE' | 'MINIMAP';
export enum editorComponentList {
  FLOW = 'FLOW',
  TOOL = 'TOOL',
  NODEPANE = 'NODEPANE',
  MINIMAP = 'MINIMAP',
}

/* Editor 函数子组件 */
export interface EditorChildrenFunComponent<P = {}>
  extends React.FunctionComponent<P> {
  typename: editorComponentTname;
}

/* Editor class子组件 */
export interface EditorChildrenClassComponent<P = {}, S = {}>
  extends React.ComponentClass<P, S> {
  typename: editorComponentTname;
}

/* Editor 子组件类型, 包含函数和类 */
export interface EditorChilds
  extends ReactComponentElement<
    EditorChildrenFunComponent | EditorChildrenClassComponent
  > {}

export function extend<T extends Object, U extends Object>(
  first: T,
  secoud: U,
): T & U {
  let result = <T & U>{};
  for (let id in first) {
    result[id] = (<any>first)[id];
  }
  for (let id in secoud) {
    if (!result.hasOwnProperty(id)) {
      result[id] = (<any>secoud)[id];
    }
  }
  return result;
}
