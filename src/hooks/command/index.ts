import merge from 'lodash/merge';
import useFlowTabCmd from './useFlowTabCommand';
import usePageCmd from './usePageCmd';
import useZoom from './useZoom';
import { EditorCommand } from '../../components/Command';
/**
 * 命令钩子，返回Editor公用方法， 保存，另存，tab的增删...
 */
export function useCommand() {
  const flowCmd = useFlowTabCmd();
  const pageCmd = usePageCmd();
  const zoom = useZoom();

  return merge(flowCmd, pageCmd, zoom);
}

export function useGetCommand(name: EditorCommand) {
  const commands = usePageCmd();
  return commands[name];
}
