import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
function App() {
	return (
		<div className="App">
			<Header />
			<CountryPicker />
			<Chart />
			<Cards />
			<Footer />
		</div>
	);
}

export default App;
