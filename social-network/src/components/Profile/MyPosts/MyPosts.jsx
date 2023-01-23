import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
	let posts = props.posts.map(p => <Post text={p.text} />);

	let postInput = React.createRef();

	let addPost = () => {
		let text = postInput.current.value;
		props.addPost(text);
		postInput.current.value = '';
	};

	return (
		<div className={s.myPosts}>
			<h2 className={s.title}> My posts</h2>
			<div className={s.newPost}>
				<textarea
					ref={postInput}
					className={s.textarea}
					placeholder='Что у вас нового?'
					rows='5'
				></textarea>
				<button onClick={addPost} className={s.button}>
					Add Post
				</button>
			</div>
			<div className={s.posts}>{posts}</div>
		</div>
	);
};

export default MyPosts;
