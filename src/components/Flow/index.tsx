import { Tabs } from 'antd';
import { TabsProps, TabPaneProps } from 'antd/lib/tabs/index';
import React, { useState } from 'react';
import { EditorChildrenFunComponent } from '@/common/interface';
import Drawing from '../Drawing/index';
import styles from './index.less';

const { TabPane } = Tabs;

export interface FlowTabProps extends TabPaneProps {
  attrs?: React.SVGAttributes<SVGElement>;
  title?: string;
  key?: TabsProps['activeKey'];
  data?: any;
}

interface FlowProps extends TabsProps {
  style?: React.CSSProperties;
  className?: string;
  tabs?: FlowTabProps[];
}

const __DEFAULT_TABS: FlowTabProps[] = [
  {
    title: 'draw 1',
    key: '1',
    data: null,
    closable: false,
  },
  {
    title: 'draw 2',
    key: '2',
    data: null,
  },
];

let newTabIndex = 0;

const Flow: EditorChildrenFunComponent<FlowProps> = props => {
  const [tabs, setTabs] = useState(props.tabs || __DEFAULT_TABS);
  const [activeKey, setActive] = useState(props.activeKey || tabs[0].key);

  const add = () => {
    const activeKey = `newTab${newTabIndex++}`;
    const newPanes = [...tabs];
    newPanes.push({ title: 'New Tab', key: activeKey });
    setTabs(newPanes);
    setActive(activeKey);
  };

  const remove = (targetKey: any) => {
    let newActiveKey = activeKey;
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

  return (
    <div className={styles.flow}>
      <Tabs
        onEdit={(e, action) => {
          if (action === 'add') {
            add();
          }
          if (action === 'remove') {
            remove(e);
          }
        }}
        activeKey={activeKey}
        onChange={key => {
          setActive(key);
        }}
        {...props}
        className={styles.tabs}
      >
        {props.tabs?.length
          ? props.tabs.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                <Drawing attrs={pane.attrs} data={pane.data} />
              </TabPane>
            ))
          : tabs.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                <Drawing attrs={pane.attrs} data={pane.data} />
              </TabPane>
            ))}
      </Tabs>
    </div>
  );
};

Flow.typename = 'FLOW';

export default Flow;
