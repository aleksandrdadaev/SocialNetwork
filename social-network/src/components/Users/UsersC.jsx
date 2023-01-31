import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from './user.png';

class Users extends React.Component {
	constructor(props) {
		super(props);
		axios
			.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		return (
			<section className={styles.users}>
				{this.props.users.map(u => (
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
											this.props.unFollow(u.id);
										}}
										className={styles.button}
									>
										Unfollow
									</button>
								) : (
									<button
										onClick={() => {
											this.props.follow(u.id);
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
	}
}

export default Users;
