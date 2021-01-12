import React from 'react';
import { Collapse } from 'antd';
import { EditorChildrenClassComponent } from '../../common/interface';
import { SettingOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Panel } = Collapse;

interface ItemPaneProps {}

function callback(key: any) {
  console.log(key);
}

const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

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
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={'left'}
        >
          <Panel
            header="This is panel header 1"
            key="1"
            extra={genExtra()}
            className={styles['site-collapse-custom-panel']}
          >
            <div>{text}</div>
          </Panel>
          <Panel
            header="This is panel header 2"
            key="2"
            extra={genExtra()}
            className={styles['site-collapse-custom-panel']}
          >
            <div>{text}</div>
          </Panel>
          <Panel
            header="This is panel header 3"
            key="3"
            extra={genExtra()}
            className={styles['site-collapse-custom-panel']}
          >
            <div>{text}</div>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
