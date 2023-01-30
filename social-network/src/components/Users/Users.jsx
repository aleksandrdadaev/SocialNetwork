import React from 'react';
import styles from './Users.module.css';

const Users = props => {
	// debugger;
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				fullName: 'Danil N',
				location: { country: 'Russia', city: 'Novokuznetsk' },
				age: 20,
				followed: false,
				photoUrl:
					'https://icdn.lenta.ru/images/2021/06/03/14/20210603141543555/square_320_e69d8d78f5a03c281c39be35b26108fc.jpg',
			},
			{
				id: 2,
				fullName: 'Sanchezz A',
				location: { country: 'Russia', city: 'Moscow' },
				age: 27,
				followed: true,
				photoUrl:
					'https://icdn.lenta.ru/images/2021/06/03/14/20210603141543555/square_320_e69d8d78f5a03c281c39be35b26108fc.jpg',
			},
			{
				id: 3,
				fullName: 'Pavel K',
				location: { country: 'Russia', city: 'Saint-Petersburg' },
				age: 34,
				followed: false,
				photoUrl:
					'https://icdn.lenta.ru/images/2021/06/03/14/20210603141543555/square_320_e69d8d78f5a03c281c39be35b26108fc.jpg',
			},
		]);
	}

	let users = props.users.map(u => (
		<div key={u.id}>
			<span>
				<div>
					<img src={u.photoUrl} className={styles.photo} />
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
					<div>{u.fullName}</div>
					<div>{u.age} лет</div>
				</span>
				<span>
					<div>{u.location.country}</div>
					<div>{u.location.city}</div>
				</span>
			</span>
		</div>
	));
	return <section>{users}</section>;
};

export default Users;
