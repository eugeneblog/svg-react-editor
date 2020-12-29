import React, { useState } from 'react';
import pick from 'lodash/pick';
import { EditorContext } from '../EditorContext';
import { Graph, EditorChilds } from '@/common/interface';
import { EDITOR_CHILDRENS } from '../../common/constants';

interface EditorProps {
  style?: React.CSSProperties;
  className?: string;
  children: EditorChilds;
}

export interface EditorType extends React.FC<EditorProps> {}

const Editor: EditorType = props => {
  const [graph] = useState<null | Graph>(null);
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
    <EditorContext.Provider
      value={{
        graph,
      }}
    >
      <div {...pick(props, ['className', 'style'])}>{EditorChildren}</div>
    </EditorContext.Provider>
  );
};

export default Editor;
