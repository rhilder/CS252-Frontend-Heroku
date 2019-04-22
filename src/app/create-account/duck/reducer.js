import types from './types';

const initialState = {
  didCreateAccountSend: false,
  didCreateAccount: false,
  error: ''
};

const createAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMPLETED_CREATE_ACCOUNT_SUCCESS:
      return {
        didCreateAccountSend: true,
        didCreateAccount: true,
        error: ''
      };
    case types.COMPLETED_CREATE_ACCOUNT_FAIL:
      return {
        didCreateAccountSend: true,
        didCreateAccount: false,
        error: action.error
      };
    case types.RESET_CREATE_ACCOUNT_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default createAccountReducer;
