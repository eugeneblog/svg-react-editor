import React from 'react';
import { TabPaneProps, TabsProps } from 'antd/lib/tabs/index';

export interface FlowTabData extends TabPaneProps {
  attrs?: React.SVGAttributes<SVGElement>;
  title?: string;
  key?: TabsProps['activeKey'];
  data?: any;
}

interface EditorContextProps {
  tabUtil: {
    add: (target: any) => void;
    remove: (target: any) => void;
    setActive: (activeKey: string) => void;
  };
  tabs: FlowTabData[];
  activeKey: TabsProps['activeKey'];
}

export const EditorContext = React.createContext({} as EditorContextProps);
