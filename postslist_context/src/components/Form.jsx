import { usePostContext } from "../context/PostContext";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
	const [{ title, content, errorMessage: error }, dispatch] =
		usePostContext();

	const handleSubmit = (e) => {
		e.preventDefault();

		if ((title.trim() && content.trim()) !== "") {
			dispatch({ type: "ADD_POST" });
		} else {
			dispatch({
				type: "ERROR",
				payload:
					"Impossible d'ajouter le post car il n'y a pas de titre ou de contenu",
			});
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{error !== "" && <p style={{ color: "red" }}>{error}</p>}
				<div>
					<Input name={"title"} placeholder={"your title.."} />
					<Input
						name={"content"}
						placeholder={"your post content.."}
					/>
				</div>
				<div>
					<Button />
				</div>
			</form>
		</div>
	);
};

export default Form;
