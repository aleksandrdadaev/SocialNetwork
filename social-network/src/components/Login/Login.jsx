import React from 'react';
import styles from './Login.module.css';

const Login = props => {
	return (
		<section className={styles.blok}>
			<LoginForm />
		</section>
	);
};

const LoginForm = props => {
	return (
		<form className={styles.form}>
			<input type='text' placeholder='Login' className={styles.input} />
			<input type='text' placeholder='Password' className={styles.input} />
			<label className={styles.label}>
				<input type='checkbox'></input>
				<span className={styles.labelText}>remember me</span>
			</label>
			<button className={styles.button}>Login</button>
		</form>
	);
};

export default Login;
