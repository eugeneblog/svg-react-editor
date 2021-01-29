import { useStoreState, useStoreActions } from '../easyPeasyHook';

let newTabIndex = 0;

export default function useFlowTabs() {
  const tabs = useStoreState(status => status.tabs);
  const active = useStoreState(status => status.active);
  const setTabs = useStoreActions(actions => actions.setTabs);
  const setActive = useStoreActions(actions => actions.setActive);

  const add = () => {
    const activeKey = `newTab${newTabIndex++}`;
    const newPanes = [...tabs];
    newPanes.push({ title: 'New Tab', key: activeKey });
    setTabs(newPanes);
    setActive(activeKey);
  };

  const remove = (targetKey: any) => {
    let newActiveKey = active;
    let lastIndex = 0;
    tabs.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = tabs.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setTabs(newPanes);
    setActive(newActiveKey);
  };

  return {
    add,
    remove,
    onChange: (key: string) => {
      setActive(key);
    },
  };
}
