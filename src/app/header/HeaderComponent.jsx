import React from 'react';
import image from '../logo/seven-heaven.png';
import { Link } from 'react-router-dom';
import './HeaderComponent.scss'

class HeaderComponent extends React.Component {

  // constructor(props) {
  //   super(props);
  // };

  logout = () => {
    this.props.setLoggedOut(false);
    this.props.setUsername('');
    this.props.setMoney(0);
  }

  render() {
    return (
      <div className="HeaderComponent-container">
          <Link to="/">
            <img className='HeaderComponent-logo' src={image} alt="tuff" height="100" width="325"></img>
          </Link>
          {!this.props.loggedIn && (
          <div className="HeaderComponent-items">
            <Link className="HeaderComponent-link" to="/login">
              Login
            </Link>
            <Link className="HeaderComponent-link" to="/create-account">
              Create Account
            </Link>
          </div>
          )}
          {this.props.loggedIn && (
            <div className="HeaderComponent-items">
              <Link className="HeaderComponent-link" to="/rules">Game Rules</Link>
              <button className="HeaderComponent-logoutButton" onClick={this.logout}>Logout</button>
            </div>
          )}
      </div>
    );
  }
}

export default HeaderComponent;