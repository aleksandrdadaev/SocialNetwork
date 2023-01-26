import React from 'react';
import DialogsList from './DialogsList';

const DialogsListContainer = props => {
	let state = props.store.getState().dialogsPage;
	return <DialogsList dialogs={state.dialogs} />;
};

export default DialogsListContainer;
