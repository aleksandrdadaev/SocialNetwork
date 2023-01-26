import React from 'react';
import {
	updateNewMessageInputValueAC,
	sendMessageAC,
} from '../../../../redux/dialogsReducer';
import StoreContext from '../../../../StoreContext';
import Footer from './Footer';

const FooterContainer = () => {
	// let state = props.store.getState().dialogsPage;
	// let updateNewMessageInputValue = text => {
	// 	let action = updateNewMessageInputValueAC(text);
	// 	props.store.dispatch(action);
	// };
	// let sendMessage = () => {
	// 	let action = sendMessageAC();
	// 	props.store.dispatch(action);
	// };
	return (
		<StoreContext.Consumer>
			{store => {
				let state = store.getState().dialogsPage;
				let updateNewMessageInputValue = text => {
					let action = updateNewMessageInputValueAC(text);
					store.dispatch(action);
				};
				let sendMessage = () => {
					let action = sendMessageAC();
					store.dispatch(action);
				};
				return (
					<Footer
						newMessageInputValue={state.newMessageInputValue}
						updateNewMessageInputValue={updateNewMessageInputValue}
						sendMessage={sendMessage}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default FooterContainer;
