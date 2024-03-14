const Input = ({ name, value, onChange }) => {
	return (
		<>
			<input
				type={"text"}
				onChange={onChange}
				value={value}
				placeholder={"Nombre..."}
				name={name}
			/>
		</>
	);
};

export default Input;
