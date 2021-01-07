import React from 'react';
import { EditorChildrenClassComponent } from '../../common/interface';

interface MenuProps {}
interface MenuStatus {}

export default class Menu extends React.Component<MenuProps, MenuStatus>
  implements EditorChildrenClassComponent {
  static typename = 'MENU';
  render() {
    return <div></div>;
  }
}
