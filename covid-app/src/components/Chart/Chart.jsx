import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
//import styles from './Chart.module.css';
function Chart() {
	const [dailyData, setDailyData] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData());
		};
		console.log('This is the daily data', dailyData);
		fetchAPI();
	}, []);

	const LineChart = dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: 'Infected',
						borderColor: 'gray',
						fill: true,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: 'Infected',
						borderColor: 'red',
						backgroundColor: 'rgba(255,0,0,0.4)',
						fill: true,
					},
				],
			}}
		/>
	) : null;
	return <div className={StyleSheet.container}>{LineChart}</div>;
}

export default Chart;
