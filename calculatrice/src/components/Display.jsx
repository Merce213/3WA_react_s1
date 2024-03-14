const Display = ({ value }) => {
	return (
		<div>
			<input
				type="text"
				style={{ width: "300px" }}
				value={value}
				readOnly
			/>
		</div>
	);
};

export default Display;
