import React from 'react';
import s from './Footer.module.css';
import s2 from '../Messages.module.css';

const Footer = props => {
	let onMessageInputChange = e => {
		let text = e.target.value;
		props.updateNewMessageInputValue(text);
	};
	let onSendMessage = () => props.sendMessage();
	return (
		<div className={s2.blok}>
			<button className={`${s2.buttons} ${s.buttons}`}></button>
			<div className={s.textareaWrapper}>
				<textarea
					className={s.textarea}
					placeholder='Написать сообщение...'
					value={props.newMessageInputValue}
					onChange={onMessageInputChange}
				></textarea>
			</div>
			<button className={`${s2.buttons} ${s.buttons}`}></button>
			<button
				className={`${s2.buttons} ${s.buttons} ${s.send}`}
				onClick={onSendMessage}
			></button>
		</div>
	);
};

export default Footer;
