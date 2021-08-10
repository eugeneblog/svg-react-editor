import { action, computed } from 'easy-peasy';
import { FlowTabProps, FlowModal } from '@/common/interface/FlowType';

const __DEFAULT_TABS: FlowTabProps[] = [
  {
    title: 'draw 1',
    key: '1',
    data: [],
    closable: false,
  },
  {
    title: 'draw 2',
    key: '2',
    data: [],
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
  currentTab: computed(
    status => status.tabs.filter(tab => tab.key === status.active)[0],
  ),
  tabsStatus: computed(status => {
    return status.tabs.map(() => ({ zoom: 0 }));
  }),
};

export default flowModal;
