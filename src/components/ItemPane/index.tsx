import React from 'react';
import { Collapse } from 'antd';
import { EditorChildrenClassComponent } from '../../common/interface';
import { CaretRightOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Panel } = Collapse;

interface ItemPaneProps {}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class ItemPane extends React.Component<ItemPaneProps>
  implements EditorChildrenClassComponent {
  static typename = 'NODEPANE';
  render() {
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
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
