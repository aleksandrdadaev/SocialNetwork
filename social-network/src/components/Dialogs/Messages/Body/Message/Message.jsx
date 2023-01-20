import React from 'react';
import s from './Message.module.css';

const Message = props => {
	return (
		<div className={`${s.message} ${s._alien}`}>
			<p className={s.text}>{props.text}</p>
			<span className={s.time}>12:23</span>
		</div>
	);
};

export default Message;
