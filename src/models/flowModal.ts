import { action, Action } from 'easy-peasy';
import { TabsProps, TabPaneProps } from 'antd/lib/tabs/index';

export interface FlowTabProps extends TabPaneProps {
  attrs?: React.SVGAttributes<SVGElement>;
  title?: string;
  key: TabsProps['activeKey'];
  data?: any;
}

export interface FlowModal {
  tabs: FlowTabProps[];
  active: TabsProps['activeKey'];
  setTabs: Action<FlowModal, FlowTabProps[]>;
  setActive: Action<FlowModal, TabsProps['activeKey']>;
}

const __DEFAULT_TABS: FlowTabProps[] = [
  {
    title: 'draw 1',
    key: '1',
    data: null,
    closable: false,
  },
  {
    title: 'draw 2',
    key: '2',
    data: null,
  },
];

const flowModal: FlowModal = {
  tabs: __DEFAULT_TABS,
  active: __DEFAULT_TABS[0].key,
  setTabs: action((status, payload) => {
    status.tabs = payload;
  }),
  setActive: action((status, payload) => {
    status.active = payload;
  }),
};

export default flowModal;
