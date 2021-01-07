import { ReactComponentElement, Component } from 'react';

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
export type editorComponentTname =
  | 'FLOW'
  | 'TOOL'
  | 'NODEPANE'
  | 'MINIMAP'
  | 'MENU';
export enum editorComponentList {
  FLOW = 'FLOW',
  TOOL = 'TOOL',
  NODEPANE = 'NODEPANE',
  MINIMAP = 'MINIMAP',
  MENU = 'MENU',
}

/* Editor 函数子组件 */
export interface EditorChildrenFunComponent<P = {}> extends React.FC<P> {
  typename: editorComponentTname;
}

export class EditorChildrenClassComponent<P = {}, S = {}> extends Component<
  P,
  S
> {
  static typename: editorComponentTname;
}

/* Editor 子组件类型, 包含函数和类 */
export interface EditorChilds
  extends ReactComponentElement<EditorChildrenFunComponent> {}

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
