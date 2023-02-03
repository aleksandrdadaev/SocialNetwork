import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
	let posts = props.posts.map(p => <Post text={p.text} key={p.id} />);
	let onPostInputChange = e => {
		let text = e.target.value;
		props.updateNewPostInputValue(text);
	};
	let onAddPost = () => {
		props.addPost();
	};
	return (
		<div className={s.myPosts}>
			<h2 className={s.title}> My posts</h2>
			<div className={s.newPost}>
				<textarea
					className={s.textarea}
					placeholder='Что у вас нового?'
					rows='5'
					value={props.newPostInputValue}
					onChange={onPostInputChange}
				/>
				<button onClick={onAddPost} className={s.button}>
					Add Post
				</button>
			</div>
			<div className={s.posts}>{posts}</div>
		</div>
	);
};

export default MyPosts;
