import React from 'react';
import style from './header.module.css';
import Logo from './nike.png';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={`container ${style['header__inner']}`}>
				<img src={Logo} alt='Logo' className={style.header__logo} />
			</div>
		</header>
	);
};

export default Header;
