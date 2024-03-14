import { useWeatherContext } from "../context/WeatherContext";

const WeatherDisplay = () => {
	const { weather, error } = useWeatherContext();

	return (
		<div>
			{error && <p style={{ color: "red" }}>Erreur: {error}</p>}
			{weather && (
				<div>
					<p>Ville: {weather.name}</p>
					<p>Température: {Math.floor(weather.main.temp)}°C</p>
					<p>Temps: {weather.weather[0].description}</p>
				</div>
			)}
		</div>
	);
};

export default WeatherDisplay;
