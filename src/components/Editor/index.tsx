import React, { useState } from 'react';
import pick from 'lodash/pick';
import { TabsProps } from 'antd/lib/tabs';
import { EditorContext, FlowTabData } from '../EditorContext';
import { EditorChilds } from '@/common/interface';
import { EDITOR_CHILDRENS } from '../../common/constants';
import styles from './index.less';

interface EditorProps {
  style?: React.CSSProperties;
  className?: string;
  children: EditorChilds;
}

export interface EditorType extends React.FC<EditorProps> {}

const _DEFAULT_FLOW_TABS = [
  {
    title: 'draw 1',
    content: 'Content of Tab 1',
    key: '1',
    data: null,
    closable: false,
  },
  {
    title: 'draw 2',
    content: 'Content of Tab 1',
    key: '2',
    data: null,
  },
];

let newTabInd = 0;
const Editor: EditorType = props => {
  const EditorChildren: EditorChilds[] = [];
  const [tabs, setTabs] = useState<FlowTabData[]>(_DEFAULT_FLOW_TABS);
  const [active, setActive] = useState<TabsProps['activeKey']>('1');

  React.Children.forEach(props.children, (child: React.ReactNode) => {
    if (!child || !(child instanceof Object)) {
      return;
    }
    if (EDITOR_CHILDRENS[(child as EditorChilds).type.typename]) {
      EditorChildren.push(child as EditorChilds);
    }
  });

  return (
    <EditorContext.Provider
      value={{
        activeKey: active,
        tabs,
        tabUtil: {
          add: () => {
            const activeKey = `newTab${newTabInd++}`;
            const newTabs = [...tabs];
            newTabs.push({ title: 'New Tab', key: activeKey });
            setTabs(newTabs);
            setActive(activeKey);
          },
          remove: targetKey => {
            let newActiveKey: TabsProps['activeKey'] = active;
            let lastIndex: number = 0;

            tabs.forEach((pane, i) => {
              if (pane.key === targetKey) {
                lastIndex = i - 1;
              }
            });
            const newTabs = tabs.filter(pane => pane.key !== targetKey);
            if (newTabs.length && newActiveKey === targetKey) {
              if (lastIndex >= 0) {
                newActiveKey = newTabs[lastIndex].key;
              } else {
                newActiveKey = newTabs[0].key;
              }
            }
            setTabs(newTabs);
            setActive(newActiveKey);
          },
          setActive(activeKey) {
            setActive(activeKey);
          },
        },
      }}
    >
      <div
        className={styles.editorContainer}
        {...pick(props, ['className', 'style'])}
      >
        {EditorChildren}
      </div>
    </EditorContext.Provider>
  );
};

export default Editor;
