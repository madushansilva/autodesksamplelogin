import React from 'react';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import Form from '../common/form';
import Footer from '../common/footer';

class Verify extends Form {
  state = {
    data: { username: this.props.match.params.name },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('User Name'),
  };

  doSubmit = () => {
    const { data, errors } = this.state;
    const { user } = this.props;
    toast.info('verifying');
    setTimeout(
      function () {
        if (data.username.trim() !== user.username.trim()) {
          errors.username = 'The username is not recognized';
          this.setState({ errors });
        } else {
          this.props.history.replace('/password');
        }
      }.bind(this),
      5000
    );
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

              {this.renderButton('Verify')}
            </form>
            <Footer />
          </div>
          <div className="col-xs-6 col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Verify;
//
