import { usePostContext } from "../context/PostContext";

const Post = ({ post }) => {
	const [_, dispatch] = usePostContext();

	const handleDelete = (post) => {
		dispatch({ type: "DELETE_POST", payload: post.id });
	};

	return (
		<div style={{ border: "1px solid white", margin: "15px" }}>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
			<button onClick={() => handleDelete(post)}>X</button>
		</div>
	);
};

export default Post;
