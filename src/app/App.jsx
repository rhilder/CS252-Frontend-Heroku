import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import CreateAccountComponent from './create-account';
import LoginComponent from './login';
import HomeComponent from './home';
import Header from './header';
import Rules from './rules';
import { globalOperations } from './globalDuck';

import './App.scss';

export const history = createHistory();

class App extends Component {
  componentDidMount() {
    this.props.setUsernamePersist();
    this.props.setLoggedIn();
    this.props.setMoneyPersist();
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/create-account" component={CreateAccountComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/rules" component={Rules} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUsernamePersist: () => dispatch(globalOperations.setUsernamePersist()),
  setMoneyPersist: () => dispatch(globalOperations.setMoneyPersist()),
  setLoggedIn: () => dispatch(globalOperations.setLoggedIn()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);