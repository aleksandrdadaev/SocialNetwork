import React from 'react';
import s from './Messages.module.css';
import Header from './Header/Header';
import BodyContainer from './Body/BodyContainer';
import FooterContainer from './Footer/FooterContainer';

const Messages = props => {
	return (
		<div className={s.messages}>
			<Header />
			<BodyContainer store={props.store} />
			<FooterContainer store={props.store} />
		</div>
	);
};

export default Messages;
