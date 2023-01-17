import React from 'react';
import style from './navbar.module.css';

const Navbar = () => {
	return (
		<nav className={style.navbar}>
			<span className={style.navbar__item}>Profile</span>
			<span className={style.navbar__item}>Messages</span>
			<span className={style.navbar__item}>News</span>
			<span className={style.navbar__item}>Music</span>
			<span className={style.navbar__item}>Settings</span>
		</nav>
	);
};

export default Navbar;
