import React from 'react';
import { connect } from 'react-redux';
import {
	updateNewMessageInputValueAC,
	sendMessageAC,
} from '../../../../redux/dialogsReducer';
import Footer from './Footer';

let mapStateToProps = state => {
	return {
		newMessageInputValue: state.dialogsPage.newMessageInputValue,
	};
};

let mapDispatchToProps = dispatch => {
	return {
		updateNewMessageInputValue: text => {
			let action = updateNewMessageInputValueAC(text);
			dispatch(action);
		},
		sendMessage: () => {
			let action = sendMessageAC();
			dispatch(action);
		},
	};
};

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
