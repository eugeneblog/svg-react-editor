import React from 'react';
import { EditorChildrenClassComponent } from '../../common/interface';
import styles from './index.less';
import { ZoomOutOutlined, ZoomInOutlined } from '@ant-design/icons';

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
        <div style={{ paddingLeft: '14px' }}>
          {icons.map(item => (
            <a key={item.id}>{item.icon}</a>
          ))}
        </div>
      </div>
    );
  }
}
