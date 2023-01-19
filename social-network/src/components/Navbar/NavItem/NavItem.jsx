import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavItem.module.css';

const NavItem = props => {
	return (
		<NavLink
			to={'/' + props.path}
			className={item => (item.isActive ? s.item + ' ' + s.active : s.item)}
		>
			{props.text}
		</NavLink>
	);
};

export default NavItem;
