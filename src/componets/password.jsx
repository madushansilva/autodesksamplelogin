import React from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';
import { toast, ToastContainer } from 'react-toastify';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../common/footer';

class Password extends Form {
  state = {
    data: { password: '' },
    errors: {},
  };

  schema = {
    password: Joi.string().required().label('Password'),
  };

  doSubmit = () => {
    const { data, errors } = this.state;
    const { user } = this.props;

    if (data.password.trim() !== user.password.trim()) {
      errors.password = 'The Password is Incorrect';
      this.setState({ errors });
    } else {
      toast.success('Successfull');
      setTimeout(
        function () {
          this.props.history.replace('/');
        }.bind(this),
        5000
      );
    }
  };
  doRedirect = () => {
    console.log('Redirect');
    this.props.history.replace('/');
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-md-4"></div>
          <div className="col-xs-6 col-md-4 linkdivspecial">
            {this.renderLinkButton('Welcome')}
            <div className="link-div">
              <p className="pline">{user.username}</p>
            </div>
            <form onSubmit={this.hanleSubmit}>
              {this.renderInput('password', 'Password', 'password')}

              {this.renderButton('Next')}
            </form>
            <Footer />
          </div>
          <div className="col-xs-6 col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Password;
//
