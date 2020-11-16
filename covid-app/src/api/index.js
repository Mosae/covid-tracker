import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//use async await to deal with the data
export const fetchData = async () => {
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(url);

		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		console.log('This is the Error', error);
	}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);
		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modifiedData;
	} catch (error) {
		console.log('This is the daily error', error);
	}
};
