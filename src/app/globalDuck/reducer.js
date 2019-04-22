import types from './types';

const initialState = {
    username:'',
    money: 0,
    loggedIn: false
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERNAME:
          return {
            ...state,
            username: action.username
          };
        case types.SET_MONEY:
          return{
            ...state,
            money: action.money
          };
        case types.SET_LOGGEDIN:
          return{
            ...state,
            loggedIn: true
          };
        case types.SET_LOGGEDOUT:
          return {
            ...state,
            loggedIn: false
          };
        default:
          return state;
      }
};

export { globalReducer };