import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
class App extends React.Component {
	state = {
		data: {},
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}
	render() {
		const { data } = this.state;

		return (
			<div className={styles.container}>
				<Header />
				<CountryPicker />
				<Cards data={data} />
				<Chart />
				<Footer />
			</div>
		);
	}
}

export default App;
