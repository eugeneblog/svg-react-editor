import React from 'react';
import { Menu, Dropdown } from 'antd';
import { EditorChildrenFunComponent } from '../../common/interface';
import { Command } from '../Command';
import { EditorCommand } from '../Command/interfact';
import Header from '../Header';
import styles from './index.less';

// const { SubMenu } = Menu;

interface MenuProps {}

const menus = [
  {
    name: 'File',
    overlay: (
      <Menu>
        <Menu.ItemGroup>
          <Menu.Item>
            <Command name={EditorCommand.Save}>保存</Command>
          </Menu.Item>
          <Menu.Item>
            <Command name={EditorCommand.SaveAs}>另存为</Command>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    ),
  },
  {
    name: 'Edit',
    overlay: (
      <Menu>
        <Menu.ItemGroup>
          <Menu.Item>
            <Command name={EditorCommand.Undo}>撤销</Command>
          </Menu.Item>
          <Menu.Item>
            <Command name={EditorCommand.Redo}>恢复</Command>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup>
          <Menu.Item>
            <Command name={EditorCommand.Copy}>复制</Command>
          </Menu.Item>
          <Menu.Item>
            <Command name={EditorCommand.Remove}>删除</Command>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    ),
  },
];

export const EditorMenu: EditorChildrenFunComponent<MenuProps> = () => {
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
};

EditorMenu.typename = 'MENU';

export default EditorMenu;
