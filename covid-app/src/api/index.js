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
//fetch global
// export const fetchDailyData = async () => {
// 	try {
// 		const { data } = await axios.get(`${url}/daily`);
// 		return data.map(({ confirmed, deaths, reportDate: date }) => ({
// 			confirmed: confirmed.total,
// 			deaths: deaths.total,
// 			date,
// 		}));
// 	} catch (error) {
// 		console.log('This is the daily error', error);
// 	}
// };

//fetch US data
export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(
			'https://api.covidtracking.com/v1/us/daily.json'
		);

		return data.map(({ positive, recovered, death, dateChecked: date }) => ({
			confirmed: positive,
			recovered,
			deaths: death,
			date,
		}));
	} catch (error) {
		return error;
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
