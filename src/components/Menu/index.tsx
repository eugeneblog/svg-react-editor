import React from 'react';
import { EditorChildrenClassComponent } from '../../common/interface';
import Header from '../Header';
import styles from './index.less';

interface MenuProps {}
interface MenuStatus {}

export default class Menu extends React.Component<MenuProps, MenuStatus>
  implements EditorChildrenClassComponent {
  static typename = 'MENU';
  render() {
    return <Header className={styles.editorMenu}></Header>;
  }
}
