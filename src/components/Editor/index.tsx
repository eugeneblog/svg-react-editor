import React, { useState } from 'react';
import pick from 'lodash/pick';
import { EditorContext } from '../EditorContext';
import { Graph, EditorChilds } from '@/common/interface';
import { FlowType } from '@/components/Flow';

interface EditorProps {
  style?: React.CSSProperties;
  className?: string;
}

interface EditorType extends React.FC<EditorProps> {}

const Editor: EditorType = props => {
  const [graph] = useState<null | Graph>(null);
  const EditorChildren: React.ReactComponentElement<FlowType>[] = [];

  React.Children.forEach(props.children, (child: React.ReactNode) => {
    if (!child || !(child instanceof Object)) {
      return;
    }
    if ((child as EditorChilds).type.typename === 'Flow') {
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
