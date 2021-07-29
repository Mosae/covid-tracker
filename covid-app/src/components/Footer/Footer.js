/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Footer.css';
import github from '../../images/GitHub-Mark-32px.png';
function Footer() {
	return (
		<div className="footer font-link">
			<h3>Built by Mosae Litsoane</h3>
			<a href="https://github.com/Mosae/covid-tracker" target="_blank">
				<img src={github} alt="github logo" />
			</a>
		</div>
	);
}

export default Footer;
