import React from 'react';
import s from './Post.module.css';
import Ava from './Ava.jpg';

const Post = props => {
	return (
		<div className={s.post}>
			<div className={s.post__profile}>
				<a className={s.post__avatar}></a>
				<span className={s.post__nicname}>Name</span>
			</div>
			<div className={s.post__content}>
				<div className={s.post__header}>
					<span className={s.post__datetime}>28 ноября 2022, 11:54</span>
					<div className={s.post__buttons}>
						<button className={s.post__button}>Like</button>
						<button className={s.post__button}>Report</button>
					</div>
				</div>
				<p className={s.post__text}>{props.message}</p>
			</div>
		</div>
	);
};

export default Post;
