import React from 'react';
import { Button, Tooltip } from 'antd';
import { useGetCommand } from '../../hooks/command';
import { EditorCommand } from './interfact';
import { CommandIcon } from './Icons';

interface CommandProps {
  name: EditorCommand;
  className?: string;
  disabled?: boolean;
  tooltip?: string;
}

export const Command: React.FC<CommandProps> = props => {
  const commandHandle = useGetCommand(props.name);
  const { disabled, name, tooltip } = props;

  const CommandButton = (
    <Button
      type="link"
      disabled={disabled}
      icon={CommandIcon[name]}
      onClick={commandHandle}
    >
      {props.children}
    </Button>
  );

  if (!tooltip) {
    return CommandButton;
  } else {
    return (
      <Tooltip placement="top" title={tooltip} arrowPointAtCenter>
        {CommandButton}
      </Tooltip>
    );
  }
};

export default Command;
