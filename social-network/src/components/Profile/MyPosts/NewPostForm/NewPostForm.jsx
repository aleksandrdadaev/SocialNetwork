import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
	maxLengthCreator,
	required,
} from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/Textarea/Textarea';
import styles from './NewPostForm.module.css';

const NewPostForm = props => {
	return (
		<form className={styles.newPost} onSubmit={props.handleSubmit}>
			<Field
				component={Textarea}
				className={styles.textarea}
				placeholder='Что у вас нового?'
				rows='5'
				name='newPostText'
				validate={[required, maxLengthCreator(10)]}
			/>
			<button className={styles.button}>Add Post</button>
		</form>
	);
};

const NewPostReduxForm = reduxForm({
	form: 'newPost',
})(NewPostForm);

export default NewPostReduxForm;
