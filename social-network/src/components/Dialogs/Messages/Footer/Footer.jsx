import React from 'react';
import s from './Footer.module.css';
import s2 from '../Messages.module.css';

const Footer = props => {
	let messageInput = React.createRef();

	let addMessage = () => {
		let text = messageInput.current.value;
		alert(text);
	};

	return (
		<div className={s2.blok}>
			<button className={`${s2.buttons} ${s.buttons}`}></button>
			<div className={s.textareaWrapper}>
				<textarea
					className={s.textarea}
					placeholder='Написать сообщение...'
					ref={messageInput}
				></textarea>
			</div>
			<button className={`${s2.buttons} ${s.buttons}`}></button>
			<button
				className={`${s2.buttons} ${s.buttons}`}
				onClick={addMessage}
			></button>
		</div>
	);
};

export default Footer;
