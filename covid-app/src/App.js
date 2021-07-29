import React from 'react';
import { Header, Cards, Chart, CountryPicker, Footer } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
	//only class based component - easier to read as code increases
	//initial states
	state = {
		data: {},
		country: '',
	};
	async componentDidMount() {
		// makes a request to fetchData() in api file
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData }); //return data is set to the state from api call
	}

	//gets the uses choice and passes it as a param
	handleCountryChange = async (country) => {
		//used async - eaier to read
		//make a request 1 more time with the users choice to the api
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
	};

	render() {
		const { data, country } = this.state;

		return (
			<div className={styles.container}>
				<Header />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Cards data={data} />
				<Chart data={data} country={country} />
				<Footer />
			</div>
		);
	}
}

export default App;
