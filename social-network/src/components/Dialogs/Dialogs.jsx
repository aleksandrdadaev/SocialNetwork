import React from 'react';
import s from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import Search from './Search/Search';

const Dialogs = props => {
	return (
		<section className={s.dialogs}>
			<div className={s.leftPanel}>
				<Search />
				<DialogsList />
			</div>
			<div className={s.rightPanel}></div>
		</section>
	);
};

export default Dialogs;
