import actions from './actions';

const setUsername = username => {
    return dispatch => {
      return dispatch(actions.setUsername(username));
    };
  };

  const setUsernamePersist = () => {
    const username = localStorage.getItem('username');
    return dispatch => {
      return dispatch(actions.setUsername(username));
    };
  };

const setMoney = money => {
    localStorage.setItem('money', money);
    return dispatch => {
      return dispatch(actions.setMoney(money));
    };
  };

  const setMoneyPersist = () => {
    const money = localStorage.getItem('money');
    return dispatch => {
      return dispatch(actions.setMoney(money));
    };
  };

const setLoggedIn = loggedIn => {
    return dispatch => {
      return dispatch(actions.setLoggedIn(loggedIn));
    };
  };

const setLoggedOut = loggedIn => {
  localStorage.setItem('username', null);
  localStorage.setItem('money', null);
  return dispatch => {
    return dispatch(actions.setLoggedOut(loggedIn));
  }
}

export default {
    setUsername,
    setUsernamePersist,
    setMoney,
    setMoneyPersist,
    setLoggedIn,
    setLoggedOut
}