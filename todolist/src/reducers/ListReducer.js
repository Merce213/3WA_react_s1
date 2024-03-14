import { useReducer } from "react";

const initialState = {
	list: [],
	text: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				list: [
					...state.list,
					{
						id: Date.now(),
						text: state.text,
					},
				],
				text: "",
			};

		case "REMOVE_ITEM":
			return {
				...state,
				list: state.list.filter((item) => item.id !== action.payload),
			};

		case "INPUT_TEXT":
			return { ...state, [action.payload.name]: action.payload.value };

		default:
			return state;
	}
};

export const useListReducer = () => {
	return useReducer(reducer, initialState);
};
