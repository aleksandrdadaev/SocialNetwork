import React from 'react';
import StoreContext from '../../../../StoreContext';
import Body from './Body';

const BodyContainer = () => {
	// let state = props.store.getState().dialogsPage;
	return (
		<StoreContext.Consumer>
			{store => {
				let state = store.getState().dialogsPage;
				return <Body messages={state.messages} />;
			}}
		</StoreContext.Consumer>
	);
};

export default BodyContainer;
