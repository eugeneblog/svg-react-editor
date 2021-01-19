import { Tabs } from 'antd';
import pick from 'lodash/pick';
import { TabsProps, TabPaneProps } from 'antd/lib/tabs/index';
import React from 'react';
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

const Flow: EditorChildrenFunComponent<FlowProps> = props => {
  return (
    <div className={styles.flow}>
      <Tabs
        {...pick(props, ['tabPosition', 'type', 'animated'])}
        className={styles.tabs}
      >
        {props.tabs?.length
          ? props.tabs.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                <Drawing attrs={pane.attrs} data={pane.data} />
              </TabPane>
            ))
          : __DEFAULT_TABS.map(pane => (
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
