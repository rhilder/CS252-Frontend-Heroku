import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import { globalOperations } from '../globalDuck';

const mapStateToProps = state => ({
  loggedIn: state.global.loggedIn
});

const mapDispatchToProps = dispatch => ({
  setLoggedOut: loggedIn => dispatch(globalOperations.setLoggedOut(loggedIn)),
  setUsername: username => dispatch(globalOperations.setUsername(username)),
  setMoney: money => dispatch(globalOperations.setMoney(money)),
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

export default LoginContainer;