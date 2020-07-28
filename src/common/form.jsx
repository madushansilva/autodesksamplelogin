import React, { Component } from 'react';
import Input from './input';

import Joi from 'joi-browser';
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const option = {
      abortEarly: false,
    };

    const result = Joi.validate(this.state.data, this.schema, option);
    console.log(result);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;

    // const errors = {};
    // const { data } = this.state;
    // if (data.username.trim() == '')
    //   errors.username = 'User Name is required';
    // if (data.password.trim() == '') errors.password = 'Password is required';
    // return Object.keys(errors).length == 0 ? null : errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  hanleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChanged = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  handleRedirec = (e) => {
    e.preventDefault();
    this.doRedirect();
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderLinkButton = (label) => {
    return (
      <button className="btn linkbutton " onClick={this.handleRedirec}>
        <i className="fa fa-chevron-left fa-2x"></i>
        <label className="buttonText">{label}</label>
      </button>
    );
  };

  renderInput = (name, label, type = 'text') => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChanged}
        error={errors[name]}
        type={type}
      />
    );
  };
}

export default Form;
