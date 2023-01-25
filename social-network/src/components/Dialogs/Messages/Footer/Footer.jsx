import React from 'react';
import s from './Footer.module.css';
import s2 from '../Messages.module.css';
import {
	updateNewMessageInputValueAC,
	sendMessageAC,
} from '../../../../redux/dialogsReducer';

const Footer = props => {
	let messageInputChange = e => {
		let text = e.target.value;
		let action = updateNewMessageInputValueAC(text);
		props.dispatch(action);
	};

	let sendMessage = () => {
		let action = sendMessageAC();
		props.dispatch(action);
	};

	return (
		<div className={s2.blok}>
			<button className={`${s2.buttons} ${s.buttons}`}></button>
			<div className={s.textareaWrapper}>
				<textarea
					className={s.textarea}
					placeholder='Написать сообщение...'
					value={props.messageInputValue}
					onChange={messageInputChange}
				></textarea>
			</div>
			<button className={`${s2.buttons} ${s.buttons}`}></button>
			<button
				className={`${s2.buttons} ${s.buttons} ${s.send}`}
				onClick={sendMessage}
			></button>
		</div>
	);
};

export default Footer;
