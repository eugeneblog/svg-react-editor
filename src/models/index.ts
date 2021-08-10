import { createStore } from 'easy-peasy';
import { FlowModal } from '@/common/interface/FlowType';
import flowModal from './FlowModel';

export interface StoreModal extends FlowModal {}

const store = createStore(flowModal);

export default store;
