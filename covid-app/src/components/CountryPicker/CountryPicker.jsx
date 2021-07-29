import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries()); //fetches 190 countries from api
		};
		fetchAPI();
	}, [setFetchedCountries]);

	return (
		<div className={styles.container}>
			<FormControl className={styles.formControl}>
				<NativeSelect
					defaultValue=""
					onChange={(e) => {
						handleCountryChange(e.target.value);
					}}>
					{/* Because we fetched the 190 countries inside the useEffect, we dont need to write option 190 times */}
					{/* Im just looping over them and will be able to choose a country */}
					<option value="">Global</option>
					{fetchedCountries.map((country, i) => (
						<option key={i} value={country}>
							{country}
						</option>
					))}
				</NativeSelect>
			</FormControl>
		</div>
	);
};

export default CountryPicker;
