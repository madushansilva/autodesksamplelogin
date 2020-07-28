import React, { Component } from 'react';
import Login from './login';

class Test extends Component {
  state = {};

  handlevent = () => {};

  lodding() {
    return <Login />;
  }
  render() {
    const { user } = this.props;
    console.log(user);
    return <button onClick={this.handlevent}>ADD</button>;
  }
}

export default Test;
