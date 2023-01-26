import React from 'react';
import s from './Dialogs.module.css';
import DialogsListContainer from './DialogsList/DialogsListContainer';
import Messages from './Messages/Messages';
import Search from './Search/Search';

const Dialogs = props => {
	return (
		<section className={s.dialogs}>
			<div className={s.leftPanel}>
				<Search />
				<DialogsListContainer />
			</div>
			<div className={s.rightPanel}>
				<Messages />
			</div>
		</section>
	);
};

export default Dialogs;
