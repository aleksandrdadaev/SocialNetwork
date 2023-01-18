import React from 'react';
import s from './header.module.css';
import Logo from './nike.png';

const Header = () => {
	return (
		<header className={s.header}>
			<div className={`container ${s.inner}`}>
				<img src={Logo} alt='Logo' className={s.logo} />
			</div>
		</header>
	);
};

export default Header;
