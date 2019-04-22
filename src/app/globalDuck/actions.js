import types from './types';

const setUsername = username => ({
    type: types.SET_USERNAME,
    username
  });

const setMoney = money => ({
    type: types.SET_MONEY,
    money
  });

const setLoggedIn = loggedIn => ({
    type: types.SET_LOGGEDIN,
    loggedIn
  });

const setLoggedOut = loggedIn => ({
  type: types.SET_LOGGEDOUT,
  loggedIn
})

export default {
    setUsername,
    setMoney,
    setLoggedIn,
    setLoggedOut
}