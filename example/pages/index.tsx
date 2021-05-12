import React from 'react';
import Editor, { Flow, ItemPane, EditorMenu, Tools } from '../../src/index';

const Graph = () => {
  return (
    <Editor>
      <EditorMenu />
      <Tools />
      <Flow tabPosition="bottom" type="editable-card" animated={false} />
      <ItemPane panes={[]} />
    </Editor>
  );
};

export default Graph;
