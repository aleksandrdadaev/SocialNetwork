import React from 'react';
import {
	updateNewPostInputValueAC,
	addPostAC,
} from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
	//let state = props.store.getState().profilePage;

	// let postInputChange = text => {
	// 	let action = updateNewPostInputValueAC(text);
	// 	props.store.dispatch(action);
	// };
	// let addPost = () => {
	// 	let action = addPostAC();
	// 	props.store.dispatch(action);
	// };
	return (
		<StoreContext.Consumer>
			{store => {
				let state = store.getState().profilePage;
				let postInputChange = text => {
					let action = updateNewPostInputValueAC(text);
					store.dispatch(action);
				};
				let addPost = () => {
					let action = addPostAC();
					store.dispatch(action);
				};
				return (
					<MyPosts
						updateNewPostInputValue={postInputChange}
						addPost={addPost}
						posts={state.posts}
						newPostInputValue={state.newPostInputValue}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default MyPostsContainer;
