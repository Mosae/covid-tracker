import React from 'react';
import styles from '../App.module.css';
import logo from '../images/header.png';
function Header() {
	return (
		<div className={styles.header}>
			<img className="header__logo" src={logo} alt="Covid Logo" />
		</div>
	);
}

export default Header;
