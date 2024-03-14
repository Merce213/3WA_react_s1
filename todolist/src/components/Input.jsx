const Input = ({ dispatch, value }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;

		dispatch({ type: "INPUT_TEXT", payload: { name, value } });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({ type: "ADD_ITEM" });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name="text"
					type="text"
					placeholder="saisir votre texte.."
					value={value}
					onChange={handleChange}
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default Input;
