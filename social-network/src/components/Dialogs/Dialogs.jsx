import React from 'react';
import s from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import Messages from './Messages/Messages';
import Search from './Search/Search';

const Dialogs = props => {
	return (
		<section className={s.dialogs}>
			<div className={s.leftPanel}>
				<Search />
				<DialogsList dialogs={props.state.dialogs} />
			</div>
			<div className={s.rightPanel}>
				<Messages messages={props.state.messages} />
			</div>
		</section>
	);
};

export default Dialogs;
