import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetchAPI = async () => {
			// past daily data
			const initialDailyData = await fetchDailyData();

			setDailyData(initialDailyData);
		};
		// console.log('This is the daily data', dailyData);
		fetchAPI();
	}, []);
	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: ['rgba(255, 168, 6, 0.37)', 'rgba(6, 255, 89, 0.37)', 'rgba(255, 6, 6, 0.37)'],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;

	const lineChart = dailyData[0] ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
				datasets: [
					{
						data: dailyData.map((data) => data.confirmed),
						label: 'Infected',
						borderColor: 'gray',
						fill: true,
					},
					{
						data: dailyData.map((data) => data.deaths),
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(255,0,0,0.4)',
						fill: true,
					},
					{
						data: dailyData.map((data) => data.recovered),
						label: 'Recovered',
						borderColor: 'green',
						backgroundColor: 'rgba(0,255, 0, 0.5)',
						fill: true,
					},
				],
			}}
		/>
	) : null;
	return <div className={styles.container}>{country ? barChart : lineChart}</div>;
};

export default Chart;
