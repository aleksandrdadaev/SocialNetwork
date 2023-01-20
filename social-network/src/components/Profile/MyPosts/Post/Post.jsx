import React from 'react';
import s from './Post.module.css';

const Post = props => {
	return (
		<div className={s.post}>
			<div className={s.profile}>
				<a className={s.avatar}></a>
				<span className={s.nic}>Name</span>
			</div>
			<div className={s.content}>
				<div className={s.header}>
					<span className={s.date}>28 ноября 2022, 11:54</span>
					<div className={s.buttons}>
						<button className={s.button}>Like</button>
						<button className={s.button}>Report</button>
					</div>
				</div>
				<p className={s.text}>{props.text}</p>
			</div>
		</div>
	);
};

export default Post;
