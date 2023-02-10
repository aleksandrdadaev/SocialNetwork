import React from 'react';
import Dialog from './Dialog/Dialog';
import styles from './DialogsList.module.css';

const DialogsList = props => {
	let dialogs = props.dialogs.map(d => (
		<Dialog name={d.name} key={d.id} id={d.id} />
	));
	return <div className={styles.dialogsList}>{dialogs}</div>;
};

export default DialogsList;
