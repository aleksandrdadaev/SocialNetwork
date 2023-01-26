import React from 'react';
import {
	updateNewPostInputValueAC,
	addPostAC,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
	let state = props.store.getState().profilePage;

	let postInputChange = text => {
		let action = updateNewPostInputValueAC(text);
		props.store.dispatch(action);
	};
	let addPost = () => {
		let action = addPostAC();
		props.store.dispatch(action);
	};
	return (
		<MyPosts
			updateNewPostInputValue={postInputChange}
			addPost={addPost}
			posts={state.posts}
			newPostInputValue={state.newPostInputValue}
		/>
	);
};

export default MyPostsContainer;
