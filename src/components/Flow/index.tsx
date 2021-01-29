import React from 'react';
import { Tabs } from 'antd';
import { useStoreState } from '../../hooks/easyPeasyHook';
import { useCommand } from '../../hooks/command';
import { FlowTabProps } from '../../models/FlowModel';
import { TabsProps } from 'antd/lib/tabs/index';
import { EditorChildrenFunComponent } from '@/common/interface';
import Drawing from '../Drawing/index';
import styles from './index.less';

const { TabPane } = Tabs;

interface FlowProps extends TabsProps {
  style?: React.CSSProperties;
  className?: string;
  tabs?: FlowTabProps[];
}

const Flow: EditorChildrenFunComponent<FlowProps> = props => {
  const tabs = useStoreState(status => status.tabs);
  const active = useStoreState(status => status.active);
  const { add, remove, onChange, saveAs } = useCommand();

  React.useEffect(() => {
    saveAs();
  }, []);
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
        activeKey={active}
        onChange={onChange}
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

// type initFlowData = { tabs: FlowTabProps[], active: TabsProps['activeKey'] }
export default Flow;
