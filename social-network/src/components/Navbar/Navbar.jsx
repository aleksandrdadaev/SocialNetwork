import React from 'react';
import styles from './Navbar.module.css';
import NavItem from './NavItem/NavItem';

const Navbar = props => {
	return (
		<nav className={styles.navbar}>
			<NavItem path='profile' text='Profile' />
			<NavItem path='news' text='News' />
			<NavItem path='dialogs' text='Messages' />
			<NavItem path='users' text='Users' />
			<NavItem path='music' text='Music' />
			<NavItem path='settings' text='Settings' />
		</nav>
	);
};

export default Navbar;
