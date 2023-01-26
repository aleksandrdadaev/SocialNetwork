import React from 'react';
import {
	updateNewMessageInputValueAC,
	sendMessageAC,
} from '../../../../redux/dialogsReducer';
import Footer from './Footer';

const FooterContainer = props => {
	let state = props.store.getState().dialogsPage;
	let updateNewMessageInputValue = text => {
		let action = updateNewMessageInputValueAC(text);
		props.store.dispatch(action);
	};
	let sendMessage = () => {
		let action = sendMessageAC();
		props.store.dispatch(action);
	};
	return (
		<Footer
			newMessageInputValue={state.newMessageInputValue}
			updateNewMessageInputValue={updateNewMessageInputValue}
			sendMessage={sendMessage}
		/>
	);
};

export default FooterContainer;
