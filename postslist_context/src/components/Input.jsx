import { usePostContext } from "../context/PostContext";

const Input = ({ name, placeholder }) => {
	const [state, dispatch] = usePostContext();

	const handleChange = (e) => {
		const { name, value } = e.target;

		dispatch({ type: "INPUT_VALUE", payload: { name, value } });
	};

	return (
		<input
			type="text"
			placeholder={placeholder}
			name={name}
			value={state[name]}
			onChange={handleChange}
		/>
	);
};

export default Input;
