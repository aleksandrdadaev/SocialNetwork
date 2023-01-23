import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import NavItem from './NavItem/NavItem';

const Navbar = () => {
	return (
		<nav className={s.navbar}>
			<NavItem path='profile' text='Profile' />
			<NavItem path='news' text='News' />
			<NavItem path='dialogs' text='Messages' />
			<NavItem path='friends' text='Friends' />
			<NavItem path='music' text='Music' />
			<NavItem path='settings' text='Settings' />
		</nav>
	);
};

export default Navbar;
