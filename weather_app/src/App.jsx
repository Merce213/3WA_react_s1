import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
	return (
		<div>
			<h1>Weather App</h1>

			<SearchBar />
			<WeatherDisplay />
		</div>
	);
};

export default App;
