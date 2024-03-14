import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { useCalculator } from "./reducers/CalculatorReducer";

const App = () => {
	const [state, dispatch] = useCalculator();

	console.log(state);

	const handleInput = (value) => {
		dispatch({ type: "input", payload: value });
	};

	const handleOperator = (value) => {
		if (state.firstOperand && state.operator && state.displayValue) {
			handleCalculate();
		}

		dispatch({ type: "operator", payload: value });
	};

	const handleCalculate = () => {
		const firstOperand = parseFloat(state.firstOperand);
		const secondOperand = parseFloat(state.displayValue);
		let result;
		switch (state.operator) {
			case "+":
				result = firstOperand + secondOperand;
				break;
			case "-":
				result = firstOperand - secondOperand;
				break;
			case "*":
				result = firstOperand * secondOperand;
				break;
			case "/":
				if (secondOperand === 0) {
					result = "Désolé la divison par 0 est impossible";
					break;
				}
				result = firstOperand / secondOperand;
				break;
			default:
				result = 0;
		}
		dispatch({ type: "calculate", payload: result });
	};

	const handleReset = () => {
		dispatch({ type: "reset" });
	};

	return (
		<div>
			<Display
				value={
					state.errorMessage !== ""
						? state.errorMessage
						: state.displayValue
				}
			/>
			<div
				style={{
					display: "flex",
					padding: "10px",
					justifyContent: "space-between",
				}}
			>
				<Button label="1" handleClick={() => handleInput("1")} />
				<Button label="2" handleClick={() => handleInput("2")} />
				<Button label="3" handleClick={() => handleInput("3")} />
				<Button label="+" handleClick={() => handleOperator("+")} />
			</div>
			<div
				style={{
					display: "flex",
					padding: "10px",
					justifyContent: "space-between",
				}}
			>
				<Button label="4" handleClick={() => handleInput("4")} />
				<Button label="5" handleClick={() => handleInput("5")} />
				<Button label="6" handleClick={() => handleInput("6")} />
				<Button label="-" handleClick={() => handleOperator("-")} />
			</div>
			<div
				style={{
					display: "flex",
					padding: "10px",
					justifyContent: "space-between",
				}}
			>
				<Button label="7" handleClick={() => handleInput("7")} />
				<Button label="8" handleClick={() => handleInput("8")} />
				<Button label="9" handleClick={() => handleInput("9")} />
				<Button label="*" handleClick={() => handleOperator("*")} />
			</div>
			<div
				style={{
					display: "flex",
					padding: "10px",
					justifyContent: "space-between",
				}}
			>
				<Button label="0" handleClick={() => handleInput("0")} />
				<Button label="C" handleClick={handleReset} />
				<Button label="=" handleClick={handleCalculate} />
				<Button label="/" handleClick={() => handleOperator("/")} />
			</div>
		</div>
	);
};

export default App;
