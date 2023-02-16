import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './NewMessageForm.module.css';
import styles2 from '../Messages.module.css';
import { Textarea } from '../../../common/FormsControls/Textarea/Textarea';
import {
	maxLengthCreator,
	required,
} from '../../../../utils/validators/validators';

const NewMessageForm = props => {
	return (
		<form className={styles2.blok} onSubmit={props.handleSubmit}>
			<div className={styles.textareaWrapper}>
				<Field
					component={Textarea}
					className={styles.textarea}
					placeholder='Написать сообщение...'
					name='message'
					rows='1'
					validate={[required, maxLengthCreator(50)]}
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
