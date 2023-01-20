import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';
import Photo from './Ava.jpg';

const Dialog = props => {
	let path = '/dialogs/' + props.id;
	return (
		<NavLink
			to={path}
			className={item => (item.isActive ? `${s.dialog} ${s.active}` : s.dialog)}
		>
			<img src={Photo} className={s.img} />
			<div className={s.info}>
				<div className={s.header}>
					<span className={s.name}>{props.name}</span>
					<span className={s.text}>14:51</span>
				</div>
				<span className={s.text}>Привет</span>
			</div>
		</NavLink>
	);
};

export default Dialog;
