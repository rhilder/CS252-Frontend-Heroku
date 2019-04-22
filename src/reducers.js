import { combineReducers } from 'redux';
import loginReducer from './app/login/duck';
import createAccountReducer from './app/create-account/duck';
import { globalReducer } from './app/globalDuck';

const rootReducer = combineReducers({
  login: loginReducer,
  createAccount: createAccountReducer,
  global: globalReducer
});

export default rootReducer;
