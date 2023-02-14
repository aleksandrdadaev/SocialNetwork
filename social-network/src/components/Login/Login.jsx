import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';

const Login = props => {
	const onSubmit = formData => {
		console.log(formData);
	};
	return (
		<section className={styles.blok}>
			<LoginReduxForm onSubmit={onSubmit} />
		</section>
	);
};

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

export default Login;
