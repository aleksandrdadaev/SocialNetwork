import React from 'react';
import s from './navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.navbar}>
			<span className={s.item}>Profile</span>
			<span className={s.item}>Messages</span>
			<span className={s.item}>News</span>
			<span className={s.item}>Music</span>
			<span className={s.item}>Settings</span>
		</nav>
	);
};

export default Navbar;
