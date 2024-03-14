import { createContext, useContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherContextProvider = ({ children }) => {
	const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

	const [city, setCity] = useState("");
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDataByCity = async () => {
			try {
				const geoResponse = await fetch(
					`https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality`
				);
				if (!geoResponse.ok)
					throw new Error(
						"Problème survenu lors de la récupération des données géographiques (latitude et longitude)"
					);

				const geoData = await geoResponse.json();
				const [lon, lat] = geoData.features[0].geometry.coordinates;

				const weatherResponse = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`
				);
				if (!weatherResponse.ok)
					throw new Error(
						"Problème survenu lors de la récupération des données météo"
					);

				const weatherData = await weatherResponse.json();

				setWeather(weatherData);
				setError(null);
			} catch (error) {
				setError(error.message);
			}
		};

		const fetchDataByLocation = async () => {
			try {
				if (!navigator.geolocation) {
					throw new Error(
						"La géolocalisation n'est pas prise en charge par votre navigateur"
					);
				}

				navigator.geolocation.getCurrentPosition(async (position) => {
					const { longitude: lon, latitude: lat } = position.coords;
					const weatherResponse = await fetch(
						`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`
					);
					if (!weatherResponse.ok)
						throw new Error(
							"Une erreur est survenue lors de la récupération des données météo"
						);

					const weatherData = await weatherResponse.json();
					setWeather(weatherData);
					setError(null);
				});
			} catch (error) {
				console.error(error);
				setError(error.message);
			}
		};

		if (city.trim() !== "") {
			fetchDataByCity();
		} else {
			fetchDataByLocation();
		}
	}, [city]);

	return (
		<WeatherContext.Provider value={{ setCity, weather, error }}>
			{children}
		</WeatherContext.Provider>
	);
};
