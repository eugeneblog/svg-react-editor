import React from 'react';
import { EditorCommand } from '../Command/interfact';
import {
  ZoomOutOutlined,
  ZoomInOutlined,
  UndoOutlined,
  RedoOutlined,
  CopyOutlined,
  PauseOutlined,
  DeleteOutlined,
  SaveOutlined,
} from '@ant-design/icons';

export type EnumIconElement = {
  [key in EditorCommand]: React.ReactElement;
};

export const CommandIcon: EnumIconElement = {
  [EditorCommand.ZoomIn]: <ZoomInOutlined />,
  [EditorCommand.ZoomOut]: <ZoomOutOutlined />,
  [EditorCommand.Undo]: <UndoOutlined />,
  [EditorCommand.Redo]: <RedoOutlined />,
  [EditorCommand.Copy]: <CopyOutlined />,
  [EditorCommand.Paste]: <PauseOutlined />,
  [EditorCommand.Remove]: <DeleteOutlined />,
  [EditorCommand.Save]: <SaveOutlined />,
  [EditorCommand.SaveAs]: <SaveOutlined />,
};

export default CommandIcon;
