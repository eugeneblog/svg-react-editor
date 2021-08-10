import React from 'react';
import { Collapse, Empty, Button } from 'antd';
// import { CollapsePanelProps } from 'antd/lib/collapse';
import { __DEFAULT_MATERIAL } from '../../static/DEFAULT';
import { PaneContent } from './PaneContent';
import { EditorChildrenFunComponent } from '../../common/interface';
import { CaretRightOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Panel } = Collapse;

export type ItemPaneArray = Array<{
  id: string;
  title: string;
  content: [];
}>;

interface ItemPaneProps {
  panes: ItemPaneArray;
}

const ItemPane: EditorChildrenFunComponent<ItemPaneProps> = ({ panes }) => {
  return (
    <div className={styles.itemPane}>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className={styles.box}
      >
        {panes.length
          ? panes.map(item => (
              <Panel key={item.id} header={item.title}>
                <PaneContent content={item.content} />
              </Panel>
            ))
          : __DEFAULT_MATERIAL.map(item => (
              <Panel key={item.id} header={item.title}>
                <PaneContent content={item.content} />
              </Panel>
            ))}
      </Collapse>
    </div>
  );
};

ItemPane.typename = 'NODEPANE';

export default ItemPane;
