import React from 'react';
import s from './Messages.module.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Body from './Body/Body';

const Messages = props => {
	return (
		<div className={s.messages}>
			<Header />
			<Body messages={props.messages} />
			<Footer
				dispatch={props.dispatch}
				messageInputValue={props.messageInputValue}
			/>
		</div>
	);
};

export default Messages;
