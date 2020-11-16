import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData());
		};
		console.log('This is the daily data', dailyData);
		fetchAPI();
	}, []);

	console.log(confirmed, recovered, deaths);
	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: [
							'rgba(255, 168, 6, 0.37)',
							'rgba(6, 255, 89, 0.37)',
							'rgba(255, 6, 6, 0.37)',
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: false,
				title: { display: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;

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
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(255,0,0,0.4)',
						fill: true,
					},
				],
			}}
		/>
	) : null;
	return (
		<div className={styles.container}>{country ? barChart : LineChart}</div>
	);
};

export default Chart;
