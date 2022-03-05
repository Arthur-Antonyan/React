import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../formControls/formControls';
import { login } from '../../redux/authReducer';
import { maxLength, required } from '../../utils/validate';
import { Navigate } from 'react-router';
import styles from '../../formControls/formControls.module.css';

const maxLength30 = maxLength(30);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="email" component={Input} type="text" placeholder="login" validate={[required, maxLength30]} />
      </div>
      <div>
        <Field name="password" component={Input} type="text" placeholder="pass" validate={[required, maxLength30]} />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" />
      </div>
      {props.error && <div className={styles.error}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) return <Navigate to="/profile" />;
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
