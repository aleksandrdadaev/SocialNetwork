import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './NewPostForm.module.css';

const NewPostForm = props => {
	return (
		<form className={styles.newPost} onSubmit={props.handleSubmit}>
			<Field
				component='textarea'
				className={styles.textarea}
				placeholder='Что у вас нового?'
				rows='5'
				name='newPostText'
			/>
			<button className={styles.button}>Add Post</button>
		</form>
	);
};

const NewPostReduxForm = reduxForm({
	form: 'newPost',
})(NewPostForm);

export default NewPostReduxForm;
