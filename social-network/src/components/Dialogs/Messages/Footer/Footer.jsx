import React from 'react';
import s from './Footer.module.css';
import s2 from '../Messages.module.css';
import {
	updateNewMessageInputValueActionCreator,
	addMessageActionCreator,
} from '../../../../redux/state';

const Footer = props => {
	let messageInputChange = e => {
		let text = e.target.value;
		let action = updateNewMessageInputValueActionCreator(text);
		props.dispatch(action);
	};

	let addMessage = () => {
		let action = addMessageActionCreator();
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
				onClick={addMessage}
			></button>
		</div>
	);
};

export default Footer;
