import ListItem from "./ListItem";

const List = ({ dispatch, list }) => {
	console.log("list", list);
	return (
		<div>
			<ul>
				{list.map((item) => (
					<ListItem key={item.id} item={item} dispatch={dispatch} />
				))}
			</ul>
		</div>
	);
};

export default List;
