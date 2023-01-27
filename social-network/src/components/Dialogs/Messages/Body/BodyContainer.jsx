import React from 'react';
import { connect } from 'react-redux';
import Body from './Body';

let mapStateToProps = state => {
	return {
		messages: state.dialogsPage.messages,
	};
};

let mapDispatchToProps = dispatch => {
	return {};
};

const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body);

export default BodyContainer;
