import React, { useState, useEffect } from 'react';
// import 'Cards.module.css';
import axios from 'axios';
function Cards() {
	const [total, setTotal] = useState();
	useEffect(() => {
		axios.get('');
	});

	return (
		<div className="cards">
			<p>Cards Cards</p>
		</div>
	);
}

export default Cards;
