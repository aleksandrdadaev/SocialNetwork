import React from 'react';
import { connect } from 'react-redux';
import styles from './Login.module.css';
import LoginReduxForm from './LoginForm/LoginForm';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const Login = props => {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, formData.rememberMe);
	};
	if (props.isAuth) return <Navigate to='/profile' />;
	return (
		<section className={styles.blok}>
			<LoginReduxForm onSubmit={onSubmit} />
		</section>
	);
};

let mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	};
};

export default connect(mapStateToProps, { login })(Login);
