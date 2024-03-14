import { createContext, useContext } from "react";
import { usePostReducer } from "../reducers/PostReducer";

export const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostContextProvider = ({ children }) => {
	const store = usePostReducer();

	return (
		<PostContext.Provider value={store}>{children}</PostContext.Provider>
	);
};
