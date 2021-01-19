import React, { useState } from 'react';
import Editor, { Flow, ItemPane, EditorMenu, Tools } from '../../src/index';

const Graph = () => {
  const [activeKey, setActiveKey] = useState('1');
  const onEditHand = () => {};

  return (
    <Editor>
      <EditorMenu />
      <Tools />
      <Flow
        tabPosition="bottom"
        type="editable-card"
        animated={false}
        activeKey={activeKey}
        onChange={(activeKey: string) => {
          setActiveKey(activeKey);
        }}
        onEdit={onEditHand}
      />
      <ItemPane />
    </Editor>
  );
};

export default Graph;
