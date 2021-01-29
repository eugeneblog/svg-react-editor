// 加了一层封装，更好的支持ts

import { createTypedHooks } from 'easy-peasy';
import { StoreModal } from '../../models';

const {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore,
} = createTypedHooks<StoreModal>();

export { useStoreActions, useStoreState, useStoreDispatch, useStore };
