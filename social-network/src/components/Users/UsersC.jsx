import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from './user.png';

class Users extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
			)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
			)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		let pagesCount = Math.ceil(
			this.props.totalUsersCount / this.props.pageSize
		);
		let pages = [];
		pages.push(1);
		// if ((this.props.currentPage - 1) / 2 >= 2) {
		// }
		for (
			let i = this.props.currentPage - 2;
			i <= this.props.currentPage + 2;
			i++
		) {
			pages.push(i);
		}
		pages.push(pagesCount);
		return (
			<section className={styles.users}>
				<div className={styles.navigate}>
					<button
						className={styles.navButton}
						onClick={() => {
							if (this.props.currentPage > 1) {
								this.onPageChanged(this.props.currentPage - 1);
							}
						}}
					>
						<div className={`${styles.buttonArrow} ${styles.buttonPrev}`}></div>
					</button>
					{pages.map(p => {
						return (
							<button
								className={
									this.props.currentPage === p
										? `${styles.navButton} ${styles.buttonActive}`
										: styles.navButton
								}
								onClick={() => {
									this.onPageChanged(p);
								}}
							>
								{p}
							</button>
						);
					})}
					<button
						className={styles.navButton}
						onClick={() => {
							if (this.props.currentPage < pagesCount) {
								this.onPageChanged(this.props.currentPage + 1);
							}
						}}
					>
						<div className={`${styles.buttonArrow} ${styles.buttonNext}`}></div>
					</button>
					{/* <button className={styles.navButton}>
						<div className={`${styles.buttonArrow} ${styles.buttonPrev}`}></div>
					</button>
					<button className={`${styles.navButton} ${styles.buttonActive}`}>
						1
					</button>
					<button className={styles.navButton}>2</button>
					<button className={styles.navButton}>3</button>
					<button className={styles.navButton}>4</button>
					<button className={styles.navButton}>5</button>
					<button className={styles.navButton}>...</button>
					<button className={styles.navButton}>
						<div className={`${styles.buttonArrow} ${styles.buttonNext}`}></div>
					</button> */}
				</div>
				{this.props.users.map(u => (
					<div key={u.id} className={styles.user}>
						<img
							src={u.photos.small != null ? u.photos.small : userPhoto}
							className={styles.photo}
						/>
						<div className={styles.info}>
							<span className={styles.name}>{u.name}</span>
							<p className={styles.status}>{u.status}</p>
						</div>
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
				))}
			</section>
		);
	}
}

export default Users;
