import React, { useState } from 'react';
import pick from 'lodash/pick';
import { EditorContext } from '../EditorContext'
import { Graph } from '@/common/interface'

interface EditorProps {
  style?: React.CSSProperties;
  className?: string;
}

const Editor: React.FC<EditorProps> = props => {
  const [graph] = useState<null | Graph>(null)
  return (
    <EditorContext.Provider value={{
      graph,
    }}>
      <div {...pick(props, ['className', 'style'])}>
        {props.children}
      </div>
    </EditorContext.Provider>
  )
}

export default Editor
