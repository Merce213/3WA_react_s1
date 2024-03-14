import { usePostContext } from "../context/PostContext";
import Post from "./Post";

const Posts = () => {
	const [{ posts }] = usePostContext();

	return (
		<div>
			<h1>Posts :</h1>

			{posts.length > 0 ? (
				posts.map((post) => <Post key={post.id} post={post} />)
			) : (
				<span> Aucun posts pour le moment.</span>
			)}
		</div>
	);
};

export default Posts;
