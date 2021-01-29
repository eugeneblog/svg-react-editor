import React from 'react';
import { useStoreState } from '../easyPeasyHook';

export default function usePageCmd() {
  const tabs = useStoreState(status => status.tabs);

  /**
   * 保存方式： 生成xml + base64编码压缩
   */
  const save = React.useCallback(function() {
    console.log(tabs);
  }, []);

  const saveAs = React.useCallback(function() {
    document.addEventListener('keydown', function(e) {
      if (
        e.keyCode == 83 &&
        (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)
      ) {
        e.preventDefault();
        alert('saved');
      }
    });
  }, []);

  const redo = React.useCallback(function() {}, []);

  const undo = React.useCallback(function() {}, []);

  return {
    save,
    saveAs,
    redo,
    undo,
  };
}
