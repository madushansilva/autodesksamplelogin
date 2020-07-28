import React, { Component } from 'react';
import Joi, { errors } from 'joi-browser';
import Form from '../common/form';
import FooterLogin from '../common/footerlogin';
import { toast, ToastContainer } from 'react-toastify';

class RegisterForm extends Form {
  state = {
    data: {
      firstname: '',
      lastname: '',
      username: '',
      reusername: '',
      password: '',
      repassword: '',
    },
    errors: {},
  };

  schema = {
    firstname: Joi.string()
      .required()
      .error((errors) => {
        return {
          message: 'Please enter your first name',
        };
      }),
    lastname: Joi.string()
      .required()
      .error((errors) => {
        return {
          message: 'Please enter your last name',
        };
      }),
    username: Joi.string()
      .required()
      .error((errors) => {
        return {
          message: 'Please enter your username',
        };
      }),
    reusername: Joi.string()
      .required()
      .error((errors) => {
        return {
          message: 'Please re-enter your username',
        };
      }),
    password: Joi.string()
      .required()
      .error((errors) => {
        return {
          message: 'Please enter your password',
        };
      }),
    repassword: Joi.string()
      .required()
      .error((errors) => {
        return {
          message: 'Please re-enter your password',
        };
      }),
  };

  doSubmit = () => {
    const { data, errors } = this.state;
    //console.log('submitted');
    if (data.username.trim() === data.reusername.trim()) {
      if (data.password.trim() === data.repassword.trim()) {
        toast.success('Account created successfully');
        setTimeout(
          function () {
            this.props.history.replace('/');
          }.bind(this),
          5000
        );
      } else {
        errors.repassword = 'please enter the same password';
        this.setState({ errors });
      }
    } else {
      errors.reusername = 'please enter the same username';
      this.setState({ errors });
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-md-4"></div>
          <div className="col-xs-6 col-md-4 linkdivspecial">
            <p className="pheading">Create account</p>

            <form onSubmit={this.hanleSubmit}>
              <div className="row">
                <div className="col-8 col-sm-6">
                  {this.renderInput('firstname', ' First Name')}
                </div>
                <div className="col-8 col-sm-6">
                  {this.renderInput('lastname', ' Last Name')}
                </div>
              </div>
              {this.renderInput('username', ' User Name')}
              {this.renderInput('reusername', 'Re-type User Name')}
              {this.renderInput('password', ' Password', 'password')}
              {this.renderInput('repassword', 'Re-type Password', 'password')}

              {this.renderButton('Login')}
            </form>
            <FooterLogin />
          </div>
          <div className="col-xs-6 col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
