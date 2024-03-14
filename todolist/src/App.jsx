import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import { useListReducer } from "./reducers/ListReducer";

const App = () => {
	const [state, dispatch] = useListReducer();
	console.log("state", state);

	return (
		<div>
			<Input dispatch={dispatch} value={state.text} />
			<List dispatch={dispatch} list={state.list} />
		</div>
	);
};

export default App;
