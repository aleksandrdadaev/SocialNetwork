import React from 'react';
import styles from './Body.module.css';
import Message from './Message/Message';

const Body = props => {
	let messages = props.messages.map(m => <Message text={m.text} key={m.id} />);
	return <div className={styles.body}>{messages}</div>;
};

export default Body;
