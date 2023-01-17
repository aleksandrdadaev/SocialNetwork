import React from 'react';
import './Navbar.css';

function Navbar() {
	return (
		<nav className='Navbar'>
			<span className='Navbar__Item'>Profile</span>
			<span className='Navbar__Item'>Messages</span>
			<span className='Navbar__Item'>News</span>
			<span className='Navbar__Item'>Music</span>
			<span className='Navbar__Item'>Settings</span>
		</nav>
	);
}

export default Navbar;
