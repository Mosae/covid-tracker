import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
class App extends React.Component {
	state = {
		data: {},
		country: '',
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		//fetch the data
		//set the data
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
