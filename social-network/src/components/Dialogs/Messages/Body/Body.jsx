import React from 'react';
import s from './Body.module.css';
import Message from './Message/Message';

let messagesData = [
	{ id: 1, text: 'Hi' },
	{
		id: 2,
		text: 'How are you?',
	},
	{ id: 3, text: 'Hi' },
];

const Body = props => {
	let messages = messagesData.map(m => <Message text={m.text} />);
	return <div className={s.body}>{messages}</div>;
};

export default Body;
