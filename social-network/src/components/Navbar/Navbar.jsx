import React from 'react';
import s from './navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.navbar}>
			<span className={s.navbar__item}>Profile</span>
			<span className={s.navbar__item}>Messages</span>
			<span className={s.navbar__item}>News</span>
			<span className={s.navbar__item}>Music</span>
			<span className={s.navbar__item}>Settings</span>
		</nav>
	);
};

export default Navbar;
