import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from './nike.png';

const Header = props => {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.inner}`}>
				<img src={Logo} alt='Logo' className={styles.logo} />
				<div className={styles.loginBlock}>
					{props.isAuth ? (
						<div className={styles.authUserBlok}>
							<button className={styles.name}>{props.login}</button>
							<button className={styles.button} onClick={props.logout}>
								Logout
							</button>
						</div>
					) : (
						<NavLink to={'/login'} className={styles.button}>
							Login
						</NavLink>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
