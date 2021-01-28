import merge from 'lodash/merge';
import useFlowTabCmd from './useFlowTabCommand';
import usePageCmd from './usePageCmd';
/**
 * 命令钩子，返回Editor公用方法， 保存，另存，tab的增删...
 */
export function useCommand() {
  const flowCmd = useFlowTabCmd();
  const pageCmd = usePageCmd();

  return merge(flowCmd, pageCmd);
}
