import { connect } from 'react-redux';
import CreateAccountComponent from './CreateAccountComponent';
import { createAccountOperations } from './duck';

const mapStateToProps = state => {
  const { didCreateAccountSend, didCreateAccount, error } = state.createAccount;
  return {
    didCreateAccountSend,
    didCreateAccount,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  createAccount: createAccountData =>
    dispatch(createAccountOperations.createAccount(createAccountData)),
  resetCreateAccountState: () =>
    dispatch(createAccountOperations.resetCreateAccountState())
});

const CreateAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccountComponent);

export default CreateAccountContainer;