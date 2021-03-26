import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { AuthorizationAction, AUTHORIZE, IAuthorizationState, LOG_OUT } from './types';

const initialState: IAuthorizationState = {
  user: null,
};

const authReducer = (
  state: IAuthorizationState = initialState,
  action: AuthorizationAction,
): IAuthorizationState => {
  switch (action.type) {
    case AUTHORIZE:
      return { ...state, user: action.payload };
    case LOG_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default persistReducer(
  {
    key: 'authorization',
    storage,
    stateReconciler: autoMergeLevel2,
  },
  authReducer,
);
