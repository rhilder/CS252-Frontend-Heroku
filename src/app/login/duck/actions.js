import types from './types';

const completedLoginSuccess = data => ({
  type: types.COMPLETED_LOGIN_SUCCESS,
  data: data
});

const completedLoginFail = () => ({
  type: types.COMPLETED_LOGIN_FAIL
});

const resetRequest = () => ({
  type: types.RESET_REQUEST
});

export default {
  completedLoginSuccess,
  completedLoginFail,
  resetRequest
};