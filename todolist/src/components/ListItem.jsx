const ListItem = ({ item, dispatch }) => {
	const handleDelete = () => {
		dispatch({ type: "REMOVE_ITEM", payload: item.id });
	};

	return (
		<li style={{ display: "flex", justifyContent: "space-between" }}>
			<p>{item.text}</p>
			<button onClick={handleDelete}>Delete</button>
		</li>
	);
};

export default ListItem;
