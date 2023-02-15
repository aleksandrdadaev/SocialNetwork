import React from 'react';
import styles from './Messages.module.css';
import Header from './Header/Header';
import Body from './Body/Body';
import NewMessageReduxForm from './NewMessageForm/NewMessageForm';

const Messages = props => {
	const onSubmit = formData => {
		console.log(formData);
		props.sendMessage(formData.message);
	};
	return (
		<div className={styles.messages}>
			<Header />
			<Body messages={props.messages} />
			<NewMessageReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default Messages;
