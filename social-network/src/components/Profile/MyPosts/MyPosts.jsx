import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
	{ id: 1, text: 'Hi, how are you?' },
	{ id: 2, text: "It's my first post" },
];

const MyPosts = () => {
	let posts = postsData.map(p => <Post text={p.text} />);
	return (
		<div>
			<h2> My posts</h2>
			<div>
				<textarea></textarea>
				<button>Add Post</button>
			</div>
			<div className={s.posts}>{posts}</div>
		</div>
	);
};

export default MyPosts;
