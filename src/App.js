import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './componets/login';
import Test from './componets/test';
import Verify from './componets/verify';
import Password from './componets/password';
import RegisterForm from './componets/Register';

class App extends Component {
  state = {
    user: { username: 'johnsmith', password: 'john@123' },
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route
            path="/verify/:name"
            render={(props) => <Verify {...props} user={user} />}
          ></Route>
          <Route
            path="/password"
            render={(props) => <Password {...props} user={user} />}
          ></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route
            path="/login"
            render={(props) => <Login {...props} user={user} />}
          ></Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
