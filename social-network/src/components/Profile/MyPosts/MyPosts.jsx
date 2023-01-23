import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
	let posts = props.posts.map(p => <Post text={p.text} />);

	let postInput = React.createRef();

	let addPost = () => {
		let text = postInput.current.value;
		alert(text);
	};

	return (
		<div>
			<h2> My posts</h2>
			<div>
				<textarea ref={postInput}></textarea>
				<button onClick={addPost}>Add Post</button>
			</div>
			<div className={s.posts}>{posts}</div>
		</div>
	);
};

export default MyPosts;
