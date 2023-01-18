import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.navbar}>
			<a href='/profile' className={s.item}>
				Profile
			</a>
			<a href='/dialogs' className={s.item}>
				Messages
			</a>
			<a href='/news' className={s.item}>
				News
			</a>
			<a href='/music' className={s.item}>
				Music
			</a>
			<a href='/settings' className={s.item}>
				Settings
			</a>
		</nav>
	);
};

export default Navbar;
