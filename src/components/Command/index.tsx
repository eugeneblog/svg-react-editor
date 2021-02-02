import React from 'react';
import { Button, Tooltip } from 'antd';
import { ZoomOutOutlined, ZoomInOutlined } from '@ant-design/icons';
import { useGetCommand } from '../../hooks/command';

/**
 * 命令组件
 */
export enum EditorCommand {
  Undo = 'undo',
  Redo = 'redo',
  Copy = 'copy',
  Paste = 'paste',
  Remove = 'remove',
  ZoomIn = 'zoomIn',
  ZoomOut = 'zoomOut',
  Save = 'save',
  SaveAs = 'saveAs',
}

const CommandIcon: React.FC<{ name: EditorCommand }> = ({ name }) => {
  if (name === EditorCommand.ZoomIn) {
    return <ZoomInOutlined />;
  }
  if (name === EditorCommand.ZoomOut) {
    return <ZoomOutOutlined />;
  }
  return null;
};

interface CommandProps {
  name: EditorCommand;
  className?: string;
  disabled?: boolean;
  tooltip?: string;
}

const Command: React.FC<CommandProps> = props => {
  const commandHandle = useGetCommand(props.name);
  const { disabled, name, tooltip } = props;

  if (!tooltip) {
    return (
      <Button
        type="link"
        disabled={disabled}
        icon={<CommandIcon name={name} />}
        onClick={commandHandle}
      >
        {props.children}
      </Button>
    );
  } else {
    return (
      <Tooltip placement="top" title={tooltip} arrowPointAtCenter>
        <Button
          type="link"
          disabled={disabled}
          icon={<CommandIcon name={name} />}
          onClick={commandHandle}
        >
          {props.children}
        </Button>
      </Tooltip>
    );
  }
};

export default Command;
