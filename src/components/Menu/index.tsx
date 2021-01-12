import React from 'react';
import { Menu, Dropdown } from 'antd';
import { EditorChildrenClassComponent } from '../../common/interface';
import Header from '../Header';
import styles from './index.less';

const { SubMenu } = Menu;

interface MenuProps {}
interface MenuStatus {}

const menus = [
  {
    name: 'File',
    overlay: (
      <Menu>
        <Menu.ItemGroup title="Group title">
          <Menu.Item>1st menu item</Menu.Item>
          <Menu.Item>2nd menu item</Menu.Item>
        </Menu.ItemGroup>
        <SubMenu title="sub menu">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
          <Menu.Item>5d menu item</Menu.Item>
          <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
      </Menu>
    ),
  },
  {
    name: 'Edit',
    overlay: (
      <Menu>
        <Menu.ItemGroup title="Group title">
          <Menu.Item>1st menu item</Menu.Item>
          <Menu.Item>2nd menu item</Menu.Item>
        </Menu.ItemGroup>
        <SubMenu title="sub menu">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
          <Menu.Item>5d menu item</Menu.Item>
          <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
      </Menu>
    ),
  },
];

export default class EditorMenu extends React.Component<MenuProps, MenuStatus>
  implements EditorChildrenClassComponent {
  static typename = 'MENU';
  render() {
    return (
      <Header className={styles.editorMenu}>
        <div className={styles.menuWrap}>
          {menus.map((menu, ind) => {
            return (
              <Dropdown key={ind} overlay={menu.overlay}>
                <a className={styles.aItem}>{menu.name}</a>
              </Dropdown>
            );
          })}
        </div>
      </Header>
    );
  }
}
