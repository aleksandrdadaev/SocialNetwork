import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
	updateNewPostInputValueAC,
	addPostAC,
} from '../../../redux/profileReducer';

const MyPosts = props => {
	let posts = props.state.posts.map(p => <Post text={p.text} />);

	let postInputChange = e => {
		let text = e.target.value;
		let action = updateNewPostInputValueAC(text);
		props.dispatch(action);
	};

	let addPost = () => {
		let action = addPostAC();
		props.dispatch(action);
	};

	return (
		<div className={s.myPosts}>
			<h2 className={s.title}> My posts</h2>
			<div className={s.newPost}>
				<textarea
					className={s.textarea}
					placeholder='Что у вас нового?'
					rows='5'
					value={props.state.newPostInputValue}
					onChange={postInputChange}
				/>
				<button onClick={addPost} className={s.button}>
					Add Post
				</button>
			</div>
			<div className={s.posts}>{posts}</div>
		</div>
	);
};

export default MyPosts;
