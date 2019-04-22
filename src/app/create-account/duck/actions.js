import types from './types';

const completedCreateAccountSuccess = () => ({
  type: types.COMPLETED_CREATE_ACCOUNT_SUCCESS
});

const completedCreateAccountFail = error => ({
  type: types.COMPLETED_CREATE_ACCOUNT_FAIL,
  error
});

const resetCreateAccountState = () => ({
  type: types.RESET_CREATE_ACCOUNT_STATE
});

export default {
  completedCreateAccountSuccess,
  completedCreateAccountFail,
  resetCreateAccountState
};
