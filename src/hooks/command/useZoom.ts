import React from 'react';
import { useStoreState } from '../easyPeasyHook';

export default function useZoom() {
  const currentTab = useStoreState(status => status.currentTab);

  // 页面变化时重新获取tab状态
  React.useEffect(() => {}, [currentTab]);

  // 放大
  const zoomIn = React.useCallback(() => {
    console.log(currentTab);
  }, [currentTab]);

  // 缩小
  const zoomOut = React.useCallback(() => {
    console.log(currentTab);
  }, [currentTab]);

  return {
    zoomIn,
    zoomOut,
  };
}
