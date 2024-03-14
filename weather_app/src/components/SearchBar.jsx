import { useState } from "react";
import { useWeatherContext } from "../context/WeatherContext";

const Form = () => {
	const { setCity } = useWeatherContext();

	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setCity(input);
		setInput("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="city"
					value={input}
					onChange={handleChange}
					placeholder="Enter a city name"
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default Form;
