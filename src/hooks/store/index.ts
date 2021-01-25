import { createTypedHooks } from 'easy-peasy';
import { StoreModal } from '../../models';

const {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore,
} = createTypedHooks<StoreModal>();

export { useStoreActions, useStoreState, useStoreDispatch, useStore };
