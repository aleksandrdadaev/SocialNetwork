import React from 'react';
import './Header.css';
import Logo from './nike.png';

function Header() {
	return (
		<header className='Header'>
			<div className='Container'>
				<img src={Logo} alt='Logo' className='Header__Logo' />
			</div>
		</header>
	);
}

export default Header;
