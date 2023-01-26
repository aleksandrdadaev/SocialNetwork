import React from 'react';
import StoreContext from '../../../StoreContext';
import DialogsList from './DialogsList';

const DialogsListContainer = () => {
	// let state = props.store.getState().dialogsPage;
	return (
		<StoreContext.Consumer>
			{store => {
				let state = store.getState().dialogsPage;
				return <DialogsList dialogs={state.dialogs} />;
			}}
		</StoreContext.Consumer>
	);
};

export default DialogsListContainer;
