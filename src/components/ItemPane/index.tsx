import React from 'react';
import { EditorChildrenClassComponent } from '../../common/interface';
import styles from './index.less';

interface ItemPaneProps {}

export default class ItemPane extends React.Component<ItemPaneProps>
  implements EditorChildrenClassComponent {
  static typename = 'NODEPANE';
  render() {
    return <div className={styles.itemPane}></div>;
  }
}
