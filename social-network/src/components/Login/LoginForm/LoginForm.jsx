import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './LoginForm.module.css';

const LoginForm = props => {
	return (
		<form className={styles.form} onSubmit={props.handleSubmit}>
			<Field
				type='text'
				placeholder='Login'
				className={styles.input}
				component='input'
				name='login'
			/>
			<Field
				type='password'
				placeholder='Password'
				className={styles.input}
				component='input'
				name='password'
			/>
			<label className={styles.label}>
				<Field component='input' type='checkbox' name='rememberMe' />
				<span className={styles.labelText}>remember me</span>
			</label>
			<button className={styles.button}>Login</button>
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: 'login',
})(LoginForm);

export default LoginReduxForm;
