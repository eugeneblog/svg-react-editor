import React from 'react';
import { Graph } from '@/common/interface'

interface EditorContextProps {
  graph: null | Graph;
}

export const EditorContext = React.createContext({} as EditorContextProps)
