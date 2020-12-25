import { FlowType } from '@/components/Flow';
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

export interface EditorChilds extends ReactComponentElement<FlowType> {}
