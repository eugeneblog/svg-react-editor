import React from 'react';
import Command from '../Command';
import { EditorCommand } from '../Command/interfact';
import { EditorChildrenFunComponent } from '../../common/interface';
import styles from './index.less';

export interface ToolsProps {}

const Tools: EditorChildrenFunComponent<ToolsProps> = () => {
  return (
    <div className={styles.toolContainer}>
      <div className={styles.wrap}>
        <Command name={EditorCommand.ZoomIn}></Command>
        <Command name={EditorCommand.ZoomOut}></Command>

        <Command name={EditorCommand.Copy}></Command>
        <Command name={EditorCommand.Remove}></Command>

        <Command name={EditorCommand.Redo}></Command>
        <Command name={EditorCommand.Undo}></Command>
      </div>
    </div>
  );
};

Tools.typename = 'TOOL';

export default Tools;
