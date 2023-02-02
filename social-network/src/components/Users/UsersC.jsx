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
		if (this.props.currentPage <= 3) {
			for (let i = 2; i <= 5; i++) {
				pages.push(i);
			}
		} else if (this.props.currentPage >= pagesCount - 2) {
			for (let i = pagesCount - 4; i < pagesCount; i++) {
				pages.push(i);
			}
		} else {
			for (
				let i = this.props.currentPage - 2;
				i <= this.props.currentPage + 2;
				i++
			) {
				pages.push(i);
			}
		}
		let lowGap = Math.floor((this.props.currentPage - 1) / 2);
		let highGap = Math.ceil((this.props.currentPage + 2 + pagesCount) / 2);
		return (
			<section className={styles.users}>
				<div className={styles.navigate}>
					<button
						className={
							this.props.currentPage === 1
								? `${styles.navButton} ${styles.navButtonDis}`
								: styles.navButton
						}
						onClick={() => {
							if (this.props.currentPage > 1) {
								this.onPageChanged(this.props.currentPage - 1);
							}
						}}
					>
						<div className={`${styles.buttonArrow} ${styles.buttonPrev}`}></div>
					</button>
					<button
						className={
							this.props.currentPage === 1
								? `${styles.navButton} ${styles.buttonActive}`
								: styles.navButton
						}
						onClick={() => {
							this.onPageChanged(1);
						}}
					>
						1
					</button>
					{lowGap >= 2 && (
						<button
							className={styles.navButton}
							onClick={() => {
								this.onPageChanged(lowGap);
							}}
						>
							...
						</button>
					)}
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
					{highGap <= pagesCount - 1 && (
						<button
							className={styles.navButton}
							onClick={() => {
								this.onPageChanged(highGap);
							}}
						>
							...
						</button>
					)}
					<button
						className={
							this.props.currentPage === pagesCount
								? `${styles.navButton} ${styles.buttonActive}`
								: styles.navButton
						}
						onClick={() => {
							this.onPageChanged(pagesCount);
						}}
					>
						{pagesCount}
					</button>
					<button
						className={
							this.props.currentPage === pagesCount
								? `${styles.navButton} ${styles.navButtonDis}`
								: styles.navButton
						}
						onClick={() => {
							if (this.props.currentPage < pagesCount) {
								this.onPageChanged(this.props.currentPage + 1);
							}
						}}
					>
						<div className={`${styles.buttonArrow} ${styles.buttonNext}`}></div>
					</button>
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
