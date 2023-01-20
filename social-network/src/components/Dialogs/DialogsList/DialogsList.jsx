import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './DialogsList.module.css';

let dialogsData = [
	{ id: 1, name: 'Sanchezz' },
	{ id: 2, name: 'Danil' },
	{ id: 3, name: 'Pahan' },
];

const DialogsList = props => {
	let dialogs = dialogsData.map(d => <Dialog name={d.name} id={d.id} />);

	return <div className={s.dialogsList}>{dialogs}</div>;
};

export default DialogsList;
