import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './NewMessageForm.module.css';
import styles2 from '../Messages.module.css';

const NewMessageForm = props => {
	return (
		<form className={styles2.blok} onSubmit={props.handleSubmit}>
			<div className={styles.textareaWrapper}>
				<Field
					component='textarea'
					className={styles.textarea}
					placeholder='Написать сообщение...'
					name='message'
				></Field>
			</div>
			<button
				className={`${styles2.buttons} ${styles.buttons} ${styles.send}`}
			></button>
		</form>
	);
};

const NewMessageReduxForm = reduxForm({
	form: 'newMessage',
})(NewMessageForm);

export default NewMessageReduxForm;
