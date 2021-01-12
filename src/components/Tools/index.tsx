import React from 'react';
import { Divider } from 'antd';
import { EditorChildrenClassComponent } from '../../common/interface';
import styles from './index.less';
import {
  ZoomOutOutlined,
  ZoomInOutlined,
  RedoOutlined,
  UndoOutlined,
  CopyOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';

export interface ToolsProps {}

export interface ToolState {}

const icons = [
  {
    id: '1',
    name: '放大',
    icon: <ZoomInOutlined />,
  },
  {
    id: '2',
    name: '缩小',
    icon: <ZoomOutOutlined />,
  },
  '-',
  {
    id: '3',
    name: '撤销',
    icon: <RedoOutlined />,
  },
  {
    id: '4',
    name: '恢复',
    icon: <UndoOutlined />,
  },
  '-',
  {
    id: '5',
    name: '粘贴',
    icon: <CopyOutlined />,
  },
  {
    id: '6',
    name: '复制',
    icon: <SnippetsOutlined />,
  },
];

/**
 *
 */
export default class Tools extends React.Component<ToolsProps, ToolState>
  implements EditorChildrenClassComponent {
  static typename = 'TOOL';
  render() {
    return (
      <div className={styles.toolContainer}>
        <div className={styles.wrap}>
          {icons.map((item, ind) => {
            if (typeof item !== 'string') {
              return <a key={item.id}>{item.icon}</a>;
            } else {
              return (
                <Divider
                  style={{ color: '#000' }}
                  key={`divider${ind}`}
                  type="vertical"
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}
