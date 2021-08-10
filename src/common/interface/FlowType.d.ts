import { TabsProps, TabPaneProps } from 'antd/lib/tabs/index';
import { EditorChildrenFunComponent } from '@/common/interface';
import { Action, Computed } from 'easy-peasy';

// TabData
export interface TabDataObj {}

export interface FlowTabStatus {
  zoom: number;
}

export type TabData = TabDataObj[];

export interface FlowTabProps extends TabPaneProps {
  attrs?: React.SVGAttributes<SVGElement>;
  title?: string;
  key: TabsProps['activeKey'];
  data?: TabData;
}

export interface FlowProps extends TabsProps {
  style?: React.CSSProperties;
  className?: string;
  tabs?: FlowTabProps[];
}

export interface FlowModal {
  tabs: FlowTabProps[];
  active: TabsProps['activeKey'];
  setTabs: Action<FlowModal, FlowTabProps[]>;
  setActive: Action<FlowModal, TabsProps['activeKey']>;
  currentTab: Computed<FlowModal, FlowTabProps>;
  tabsStatus: Computed<FlowModal, FlowTabStatus[]>;
}

type FlowType = EditorChildrenFunComponent<FlowProps>;

export default FlowType;
