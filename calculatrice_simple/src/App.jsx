import { useReducer } from "react";
import "./App.css";
import Input from "./components/Input";
import { reducer } from "./reducers/CalculatorReducer";

const initialState = {
	num1: 0,
	num2: 0,
	result: 0,
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleAdd = () => {
		dispatch({
			type: "CHANGE_RESULT",
			payload: parseInt(state.num1) + parseInt(state.num2),
		});
	};

	const handleMultiply = () => {
		dispatch({
			type: "CHANGE_RESULT",
			payload: parseInt(state.num1) * parseInt(state.num2),
		});
	};

	const handleReset = () => {
		dispatch({
			type: "RESET",
			payload: 0,
		});
	};

	const handleChange = (key) => (e) => {
		const { value } = e.target;
		dispatch({
			type: `CHANGE_${key}`,
			payload: value,
		});
	};

	return (
		<div>
			<h2>Résultat : {state.result}</h2>
			<div>
				<Input
					name={"num1"}
					value={state.num1}
					onChange={handleChange("NUM1")}
				/>
				<Input
					name={"num2"}
					value={state.num2}
					onChange={handleChange("NUM2")}
				/>
			</div>
			<button onClick={handleAdd}>[+]</button>
			<button onClick={handleMultiply}>[*]</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default App;
