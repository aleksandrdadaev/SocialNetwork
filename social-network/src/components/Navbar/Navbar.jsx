import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.navbar}>
			<NavLink
				to='/profile'
				className={item =>
					item.isActive ? `${s.item} ${s.item_active}` : s.item
				}
			>
				Profile
			</NavLink>
			<NavLink
				to='/dialogs'
				className={item =>
					item.isActive ? `${s.item} ${s.item_active}` : s.item
				}
			>
				Messages
			</NavLink>
			<NavLink
				to='/news'
				className={item =>
					item.isActive ? `${s.item} ${s.item_active}` : s.item
				}
			>
				News
			</NavLink>
			<NavLink
				to='/music'
				className={item =>
					item.isActive ? `${s.item} ${s.item_active}` : s.item
				}
			>
				Music
			</NavLink>
			<NavLink
				to='/settings'
				className={item =>
					item.isActive ? `${s.item} ${s.item_active}` : s.item
				}
			>
				Settings
			</NavLink>
		</nav>
	);
};

export default Navbar;
