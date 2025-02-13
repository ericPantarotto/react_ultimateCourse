import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import accountReducer from '../features/accounts/accountSlice';
import customerReducer from '../features/customers/customerSlice';

import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
