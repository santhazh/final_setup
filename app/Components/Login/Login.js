import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../assets/Images/Overstock_logo.png';
import './Login.css';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

  const renderField = ({ placeholder, input, label, type, meta: { touched, error }}) => (
    <div className="form-group">
      <label className="labelTxt">{label}</label>
      <input {...input} placeholder={placeholder} type={type} className="form-control" />
      {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
  );

export class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { handleSubmit, pristine, submitting, reset, dirty, loginError } = this.props;
    const handleSubmitForm = (values) => {
      console.info('FormValues', values);
    };
    return (
      <div className="loginBoxWrap">
        <div className="loginBox">
          <div className="logoWrap">
            <img src={logo} alt="Logo" className="logoImg" />
          </div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Field name="email" component={renderField} label="Email Address*" placeholder="Email Address" />
            <Field name="password" type="password" component={renderField} label="password*" placeholder="password" />
            <div className="form-group">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const LoginPage = reduxForm({
  form: 'login',
  validate,
})(Login);

export default LoginPage;
