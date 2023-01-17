import React from 'react';
import s from './header.module.css';
import Logo from './nike.png';

const Header = () => {
	return (
		<header className={s.header}>
			<div className={`container ${s.header__inner}`}>
				<img src={Logo} alt='Logo' className={s.header__logo} />
			</div>
		</header>
	);
};

export default Header;
