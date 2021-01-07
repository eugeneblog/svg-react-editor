import React from 'react';
import { EditorChildrenClassComponent } from '../../common/interface';

export interface ToolsProps {}

export interface ToolState {}

/**
 *
 */
export default class Tools extends React.Component<ToolsProps, ToolState>
  implements EditorChildrenClassComponent {
  static typename = 'TOOL';
  render() {
    return <div></div>;
  }
}
