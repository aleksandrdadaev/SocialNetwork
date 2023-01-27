import React from 'react';
import s from './Body.module.css';
import Message from './Message/Message';

const Body = props => {
	let messages = props.messages.map(m => <Message text={m.text} key={m.id} />);
	return <div className={s.body}>{messages}</div>;
};

export default Body;
