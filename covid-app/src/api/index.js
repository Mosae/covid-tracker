import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//use async await to deal with the data
export const fetchData = async (country) => {
	let changeableUrl = url;
	if (country) {
		changeableUrl = `${url}/countries/${country}`;
	}
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeableUrl);

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
export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);
		console.log('Countries', countries);
		return countries.map((country) => country.name);
	} catch (error) {
		console.log('This error occured while fetching country data', error);
	}
};
