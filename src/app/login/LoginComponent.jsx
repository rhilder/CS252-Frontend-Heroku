import React from 'react';
import './LoginComponent.scss';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    };
  }

  componentDidUpdate() {
    if (this.props.isRequestSent && this.props.isRequestSuccess) {
      this.props.setUsername(this.state.username);
      this.props.setMoney(this.props.data.data.money);
      this.props.setLoggedIn(true);
      this.props.resetRequest();
      return this.props.history.push('/home');
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

  onSubmit = event => {
    event.preventDefault();
    const {
      username,
      password,
    } = this.state;

    if (!username || !password) {
      return this.setState(() => ({
        errorMessage: 'Please provide a username and password.'
      }));
    }

    const loginData = {
      username,
      password
    }

    this.props.login(loginData);

    this.setState(() => ({
        errorMessage: ''
      }));

  }

  render() {
      return (
        <div className="content-container">
          <h1 className="header">Login</h1>
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.errorMessage && (
                <p className="form_error">{this.state.errorMessage}</p>
            )}
            {this.props.isRequestSent && !this.props.isRequestSuccess && (
                <p className="form_error">Login Failed. Please enter a valid username and password</p>
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
            <div>
              <button className="submit-button">Login</button>
            </div>
          </form>
        </div>
      );
  }
}

export default LoginComponent;