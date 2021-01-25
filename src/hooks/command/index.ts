import useFlowTabCmd from './useFlowTabCommand';
/**
 * 命令钩子，返回Editor公用方法， 保存，另存，tab的增删...
 */
export function useCommand() {
  const flowCmd = useFlowTabCmd();
  const commands = { ...flowCmd };

  return commands;
}
