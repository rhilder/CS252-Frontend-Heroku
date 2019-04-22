import types from './types';

const initialState = {
  isRequestSuccess: false,
  isRequestSent: false,
  data: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMPLETED_LOGIN_SUCCESS:
      return {
        ...state,
        isRequestSuccess: true,
        isRequestSent: true,
        data: action.data
      };
    case types.COMPLETED_LOGIN_FAIL:
      return {
        ...state,
        isRequestSuccess: false,
        isRequestSent: true
      };
    case types.RESET_REQUEST:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default loginReducer;