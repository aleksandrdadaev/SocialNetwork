import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = props => {
	return (
		<NavLink
			to={'/' + props.path}
			className={item =>
				item.isActive ? styles.item + ' ' + styles.active : styles.item
			}
		>
			{props.text}
		</NavLink>
	);
};

export default NavItem;
