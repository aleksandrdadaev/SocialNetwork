import React from 'react';
import Body from './Body';

const BodyContainer = props => {
	let state = props.store.getState().dialogsPage;
	return <Body messages={state.messages} />;
};

export default BodyContainer;
