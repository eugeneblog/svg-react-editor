import React from 'react';
import { StoreProvider } from 'easy-peasy';
import store from '../../models/index';
import pick from 'lodash/pick';
import { EditorChilds } from '@/common/interface';
import { EDITOR_CHILDRENS } from '../../common/constants';
import styles from './index.less';

interface EditorProps {
  style?: React.CSSProperties;
  className?: string;
  children: EditorChilds;
}

export interface EditorType extends React.FC<EditorProps> {}

const Editor: EditorType = props => {
  const EditorChildren: EditorChilds[] = [];
  React.Children.forEach(props.children, (child: React.ReactNode) => {
    if (!child || !(child instanceof Object)) {
      return;
    }
    if (EDITOR_CHILDRENS[(child as EditorChilds).type.typename]) {
      EditorChildren.push(child as EditorChilds);
    }
  });

  return (
    <StoreProvider store={store}>
      <div
        className={styles.editorContainer}
        {...pick(props, ['className', 'style'])}
      >
        {EditorChildren}
      </div>
    </StoreProvider>
  );
};

export default Editor;
