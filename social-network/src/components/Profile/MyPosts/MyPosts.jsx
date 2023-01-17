import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			<h2> My posts</h2>
			<div>
				<textarea></textarea>
				<button>Add Post</button>
			</div>
			<div>
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
};

export default MyPosts;
