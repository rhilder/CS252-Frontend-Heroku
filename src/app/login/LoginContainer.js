import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { loginOperations } from './duck';
import { globalOperations } from '../globalDuck';

const mapStateToProps = state => ({
  isRequestSuccess: state.login.isRequestSuccess,
  isRequestSent: state.login.isRequestSent,
  data: state.login.data,
  loggedIn: state.global.loggedIn
});

const mapDispatchToProps = dispatch => ({
  setUsername: username => dispatch(globalOperations.setUsername(username)),
  setMoney: money => dispatch(globalOperations.setMoney(money)),
  setLoggedIn: loggedIn => dispatch(globalOperations.setLoggedIn(loggedIn)),
  resetRequest: () => dispatch(loginOperations.resetRequest()),
  login: loginData => dispatch(loginOperations.login(loginData))
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default LoginContainer;