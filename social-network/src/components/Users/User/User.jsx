import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../user.png';
import styles from './User.module.css';

const User = props => {
	return (
		<div className={styles.user}>
			<NavLink to={'/profile/' + props.user.id}>
				<img
					src={
						props.user.photos.small !== null
							? props.user.photos.small
							: userPhoto
					}
					className={styles.photo}
					alt='Ava'
				/>
			</NavLink>
			<div className={styles.info}>
				<span className={styles.name}>{props.user.name}</span>
				<p className={styles.status}>{props.user.status}</p>
			</div>
			{props.user.followed ? (
				<button
					disabled={props.followingInProgress.some(id => id === props.user.id)}
					onClick={() => {
						props.unFollowUser(props.user.id);
					}}
					className={styles.button}
				>
					Unfollow
				</button>
			) : (
				<button
					disabled={props.followingInProgress.some(id => id === props.user.id)}
					onClick={() => {
						props.followUser(props.user.id);
					}}
					className={styles.button}
				>
					Follow
				</button>
			)}
		</div>
	);
};

export default User;
