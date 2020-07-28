import React from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';

import { Redirect, Route, Link } from 'react-router-dom';
import Footer from '../common/footer';

class Login extends Form {
  state = {
    data: { username: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('User Name'),
  };

  doSubmit = () => {
    const { data } = this.state;
    this.props.history.push(`/verify/${data.username}`);
    // try {
    //   const { data } = this.state;
    //   await auth.login(data.username, data.password);
    //   const { state } = this.props.location;
    //   window.location = state ? state.from.pathname : '/';
    //   // this.props.history.push('/');
    //   //4window.location = '/';
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.username = ex.response.data;

    //   }
    // }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-md-4"></div>
          <div className="col-xs-6 col-md-4 linkdivspecial">
            <p className="pheading">Sign in</p>

            <form onSubmit={this.hanleSubmit}>
              {this.renderInput('username', ' User Name')}

              {this.renderButton('Login')}
            </form>
            <Footer />
          </div>
          <div className="col-xs-6 col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Login;
//
