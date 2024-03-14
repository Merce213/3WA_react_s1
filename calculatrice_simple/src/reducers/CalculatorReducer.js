const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_NUM1":
			return { ...state, num1: action.payload };
		case "CHANGE_NUM2":
			return { ...state, num2: action.payload };
		case "CHANGE_RESULT":
			return { ...state, result: action.payload };
		case "RESET":
			return { ...state, num1: 0, num2: 0, result: 0 };
		default:
			return state;
	}
};

export { reducer };
