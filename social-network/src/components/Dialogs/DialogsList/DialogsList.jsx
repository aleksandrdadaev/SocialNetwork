import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './DialogsList.module.css';

const DialogsList = props => {
	let dialogs = props.dialogs.map(d => (
		<Dialog name={d.name} key={d.id} id={d.id} />
	));

	return <div className={s.dialogsList}>{dialogs}</div>;
};

export default DialogsList;
