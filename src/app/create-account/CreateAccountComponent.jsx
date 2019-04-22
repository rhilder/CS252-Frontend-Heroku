import React from 'react';
import './CreateAccountComponent.scss';

class CreateAccountComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      errorMessage: '',
      isCreateAccountSent: false,
      createAccountError: false
    };
  }

  componentDidUpdate() {
    if (this.props.didCreateAccountSend && this.props.didCreateAccount) {
      this.setState(() => ({
        isCreateAccountSent: true,
        createAccountError: false
      }));
      this.props.resetCreateAccountState();
    }
    else if (this.props.didCreateAccountSend && !this.props.didCreateAccount && !this.state.createAccountError){
      this.setState(() => ({
        createAccountError: true
      }));
    }
  }

  onUsernameChange = event => {
    const username = event.target.value;
    this.setState(() => ({ username }));
  };

  onPasswordChange = event => {
    const password = event.target.value;
    this.setState(() => ({ password }));
  };

  onConfirmPasswordChange = event => {
    const confirmPassword = event.target.value;
    this.setState(() => ({ confirmPassword }));
  };

  onEmailChange = event => {
    const email = event.target.value;
    this.setState(() => ({ email }));
  };

  onFirstNameChange = event => {
    const firstName = event.target.value;
    this.setState(() => ({ firstName }));
  };

  onLastNameChange = event => {
    const lastName = event.target.value;
    this.setState(() => ({ lastName }));
  };

  onSubmit = event => {
    event.preventDefault();
    const {
      username,
      password,
      confirmPassword,
      email,
      firstName,
      lastName
    } = this.state;

    if (!username || !password || !confirmPassword || !email || !firstName || !lastName) {
      return this.setState(() => ({
        errorMessage: 'Please provide a first name, username, email, and password'
      }));
    }

    if (password !== confirmPassword) {
      return this.setState(() => ({
        errorMessage: 'Passwords must match.'
      }));
    }

    this.setState(() => ({
      errorMessage: ''
    }));

    const createAccountData = {
      firstName,
      lastName,
      username,
      email,
      password
    };

    this.props.createAccount(createAccountData);

  }

  onRedirectToLogin = () => {
    return this.props.history.push('/login');
  }

  render() {
    if (!this.state.isCreateAccountSent) {
      return (
        <div className="content-container">
          <h1 className="header">Create An Account</h1>
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.errorMessage && (
                <p className="form_error">{this.state.errorMessage}</p>
            )}
            {this.state.createAccountError && (
                <p className="form_error">{"Username or email already in use."}</p>
            )}
            <div className="item">
            <input
              type="text"
              className="text-input"
              placeholder="Username"
              autoFocus
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
            </div>
            <div className="item">
            <input
              type="password"
              className="text-input"
              placeholder="Password"
              autoFocus
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            </div>
            <div className="item">
            <input
              type="password"
              className="text-input"
              placeholder="Confirm Password"
              autoFocus
              value={this.state.confirmPassword}
              onChange={this.onConfirmPasswordChange}
            />
            </div>
            <div className="item">
            <input
              type="text"
              className="text-input"
              placeholder="Email"
              autoFocus
              value={this.state.email}
              onChange={this.onEmailChange}
            />
            </div>
            <div className="item">
            <input
              type="text"
              className="text-input"
              placeholder="First Name"
              autoFocus
              value={this.state.firstName}
              onChange={this.onFirstNameChange}
            />
            </div>
            <div className="item">
            <input
              type="text"
              className="text-input"
              placeholder="Last Name"
              autoFocus
              value={this.state.lastName}
              onChange={this.onLastNameChange}
            />
            </div>
            <div>
              <button className="submit-button">Create Account</button>
            </div>
          </form>
        </div>
      );
    } else {
      return(
        <div className="form">
          <h1 className="CreateAccountComponent-accountCreated">
            Account successfully created
          </h1>
          <button className="CreateAccountComponent-loginButton" onClick={this.onRedirectToLogin}>Login</button>
        </div>
      );
    }
  }
}

export default CreateAccountComponent;