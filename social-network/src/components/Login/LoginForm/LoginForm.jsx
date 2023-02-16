import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/Textarea/Textarea';
import styles from './LoginForm.module.css';

const LoginForm = props => {
	return (
		<form className={styles.form} onSubmit={props.handleSubmit}>
			<Field
				type='text'
				placeholder='Login'
				className={styles.input}
				component={Input}
				name='login'
				validate={[required]}
			/>
			<Field
				type='password'
				placeholder='Password'
				className={styles.input}
				component={Input}
				name='password'
				validate={[required]}
			/>
			<label className={styles.label}>
				<Field component={Input} type='checkbox' name='rememberMe' />
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
