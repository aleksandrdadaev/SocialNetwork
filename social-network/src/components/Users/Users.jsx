import React from 'react';
import styles from './Users.module.css';
import UsersPaginator from './UsersPaginator/UsersPaginator';
import User from './User/User';

const Users = props => {
	return (
		<section className={styles.users}>
			<UsersPaginator
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
			/>
			{props.users.map(user => (
				<User
					key={user.id}
					user={user}
					followingInProgress={props.followingInProgress}
					unFollowUser={props.unFollowUser}
					followUser={props.followUser}
				/>
			))}
		</section>
	);
};

export default Users;
