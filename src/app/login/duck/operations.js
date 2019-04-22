import axios from 'axios';
import actions from './actions';

const login = loginData => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_NODE_API_URL}/user/login`,
        {
          ...loginData
        }
      );
      localStorage.setItem('username', loginData.username);
      return dispatch(actions.completedLoginSuccess(response.data));
    } catch (error) {
      return dispatch(actions.completedLoginFail());
    }
  };
};

const resetRequest = () => {
  return dispatch => {
    return dispatch(actions.resetRequest());
  };
};

export default {
  login,
  resetRequest
};