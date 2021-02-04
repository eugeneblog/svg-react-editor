import React from 'react';
import { Collapse } from 'antd';
import { CollapsePanelProps } from 'antd/lib/collapse';
import { EditorChildrenFunComponent } from '../../common/interface';
import { CaretRightOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Panel } = Collapse;

interface ItemPaneProps {}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const Item: React.FC<any> = () => {
  return <div>aa</div>;
};

export const ItemGroup: React.FC<CollapsePanelProps> = props => {
  const AllowChild: React.ReactElement[] = [];

  // 验证子组件是否为Item
  React.Children.forEach(props.children, child => {
    if (!child) {
      return;
    }
    if ((child as any).type.name === 'Item') {
      AllowChild.push(child as React.ReactElement);
    }
    return;
  });

  return (
    <Panel key={props.key} header={props.header}>
      {AllowChild}
    </Panel>
  );
};

const ItemPane: EditorChildrenFunComponent<ItemPaneProps> = () => {
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
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <ItemGroup header="This is panel header 3" key="3">
          <Item />
        </ItemGroup>
      </Collapse>
    </div>
  );
};

ItemPane.typename = 'NODEPANE';

export default ItemPane;
