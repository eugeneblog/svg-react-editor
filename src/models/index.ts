import { createStore } from 'easy-peasy';
import flowModal, { FlowModal } from './FlowModel';

export interface StoreModal extends FlowModal {}

const store = createStore(flowModal);

export default store;
