import React from 'react';
import styles from './MyPosts.module.css';
import NewPostReduxForm from './NewPostForm/NewPostForm';
import Post from './Post/Post';

const MyPosts = props => {
	let posts = props.posts.map(p => <Post text={p.text} key={p.id} />);
	const onSubmit = formData => {
		props.addPost(formData.newPostText);
	};
	return (
		<div className={styles.myPosts}>
			<h2 className={styles.title}> My posts</h2>
			<NewPostReduxForm onSubmit={onSubmit} />
			<div className={styles.posts}>{posts}</div>
		</div>
	);
};

export default MyPosts;
