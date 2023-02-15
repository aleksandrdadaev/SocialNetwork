import React from 'react';
import styles from './Dialogs.module.css';
import DialogsListContainer from './DialogsList/DialogsListContainer';
import MessagesContainer from './Messages/MessagesContainer';
import Search from './Search/Search';

const Dialogs = props => {
	return (
		<section className={styles.dialogs}>
			<div className={styles.leftPanel}>
				<Search />
				<DialogsListContainer />
			</div>
			<div className={styles.rightPanel}>
				<MessagesContainer />
			</div>
		</section>
	);
};

export default Dialogs;
