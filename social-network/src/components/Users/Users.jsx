import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from './user.png';

const Users = props => {
	let getUsers = () => {
		if (props.users.length === 0) {
			axios
				.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					props.setUsers(response.data.items);
				});
		}
	};

	return (
		<section className={styles.users}>
			<button onClick={getUsers}>Get Users</button>
			{props.users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<img
								src={u.photos.small != null ? u.photos.small : userPhoto}
								className={styles.photo}
							/>
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unFollow(u.id);
									}}
									className={styles.button}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id);
									}}
									className={styles.button}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
					</span>
				</div>
			))}
		</section>
	);
};

export default Users;
