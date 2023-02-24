import React from 'react';
import styles from './MyPosts.module.css';
import NewPostReduxForm from './NewPostForm/NewPostForm';
import Post from './Post/Post';

const MyPosts = props => {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps != this.props || nextState != this.state;
	// }

	const onSubmit = formData => {
		props.addPost(formData.newPostText);
	};

	console.log('render');
	let posts = props.posts.map(p => <Post text={p.text} key={p.id} />);
	return (
		<div className={styles.myPosts}>
			<h2 className={styles.title}> My posts</h2>
			<NewPostReduxForm onSubmit={onSubmit} />
			<div className={styles.posts}>{posts}</div>
		</div>
	);
};

export default MyPosts;
