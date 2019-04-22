import axios from 'axios';
import actions from './actions';

const createAccount = createAccountData => {
  console.log(`${process.env.REACT_APP_NODE_API_URL}/user/createUser`);
  return async dispatch => {
    try {
      await axios.post(`${process.env.REACT_APP_NODE_API_URL}/user/createUser`, {
        ...createAccountData
      });

      return dispatch(actions.completedCreateAccountSuccess());
    } catch (error) {
      return dispatch(
        actions.completedCreateAccountFail(error.response.data.message)
      );
    }
  };
};

const resetCreateAccountState = () => dispatch =>
  dispatch(actions.resetCreateAccountState());

export default {
  createAccount,
  resetCreateAccountState
};
