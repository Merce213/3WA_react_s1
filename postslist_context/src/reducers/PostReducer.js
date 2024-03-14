import { useReducer } from "react";

const initialState = {
	posts: [],
	title: "",
	content: "",
	errorMessage: "",
};

const postReducer = (state, action) => {
	switch (action.type) {
		case "INPUT_VALUE":
			return {
				...state,
				[action.payload.name]: action.payload.value,
				errorMessage: "",
			};

		case "ADD_POST":
			return {
				...state,
				posts: [
					...state.posts,
					{
						id: Date.now(),
						title: state.title,
						content: state.content,
					},
				],
				title: "",
				content: "",
				errorMessage: "",
			};

		case "ERROR":
			return {
				...state,
				errorMessage: action.payload,
			};

		case "DELETE_POST":
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.payload),
			};

		default:
			return state;
	}
};

export const usePostReducer = () => useReducer(postReducer, initialState);
