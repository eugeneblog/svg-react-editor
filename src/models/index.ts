import { createStore } from 'easy-peasy';
import flowModal, { FlowModal } from './flowModal';

export interface StoreModal extends FlowModal {}

const store = createStore({
  ...flowModal,
});

export default store;
