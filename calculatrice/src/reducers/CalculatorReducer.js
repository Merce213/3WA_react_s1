import { useReducer } from "react";

const initialState = {
	displayValue: 0,
	firstOperand: 0,
	operator: "",
	errorMessage: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "input":
			return {
				...state,
				displayValue:
					state.displayValue === 0
						? action.payload
						: state.displayValue.toString() +
						  action.payload.toString(),
				errorMessage: "",
			};

		case "operator":
			return {
				...state,
				operator: action.payload,
				firstOperand: state.displayValue,
				displayValue: 0,
			};

		case "calculate":
			return {
				...state,
				errorMessage: isNaN(parseFloat(action.payload))
					? action.payload
					: "",
				displayValue: isNaN(parseFloat(action.payload))
					? 0
					: action.payload,
				firstOperand: 0,
				operator: "",
			};

		case "reset":
			return initialState;

		default:
			return state;
	}
};

export const useCalculator = () => {
	return useReducer(reducer, initialState);
};
