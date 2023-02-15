import React from 'react';
import styles from './Login.module.css';
import LoginReduxForm from './LoginForm/LoginForm';

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

export default Login;
