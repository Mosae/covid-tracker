import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
//import styles from './Chart.module.css';
function Chart() {
	const [dailyData, setDailyData] = useState({});
	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData);
		};
		console.log('This is the daily data', dailyData);
		fetchAPI();
	}, []);

	const LineChart = dailyData[0] ? (
		<Line
			data={{ labels: dailyData(({ date }) => date), datasets: [{}, {}] }}
		/>
	) : null;
	return (
		<div>
			<p>Chart</p>
		</div>
	);
}

export default Chart;
