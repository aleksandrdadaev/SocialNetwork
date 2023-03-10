import React from 'react';
import styles from './UsersPaginator.module.css';

const UsersPaginator = props => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	if (props.currentPage <= 3) {
		for (let i = 2; i <= 5; i++) {
			pages.push(i);
		}
	} else if (props.currentPage >= pagesCount - 2) {
		for (let i = pagesCount - 4; i < pagesCount; i++) {
			pages.push(i);
		}
	} else {
		for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
			pages.push(i);
		}
	}
	let lowGap = Math.floor((props.currentPage - 1) / 2);
	let highGap = Math.ceil((props.currentPage + 2 + pagesCount) / 2);

	return (
		<div className={styles.navigate}>
			<button
				className={
					props.currentPage === 1
						? `${styles.navButton} ${styles.navButtonDis}`
						: styles.navButton
				}
				onClick={() => {
					if (props.currentPage > 1) {
						props.onPageChanged(props.currentPage - 1);
					}
				}}
			>
				<div className={`${styles.buttonArrow} ${styles.buttonPrev}`}></div>
			</button>
			<button
				className={
					props.currentPage === 1
						? `${styles.navButton} ${styles.buttonActive}`
						: styles.navButton
				}
				onClick={() => {
					if (props.currentPage !== 1) {
						props.onPageChanged(1);
					}
				}}
			>
				1
			</button>
			{lowGap >= 2 && (
				<button
					className={styles.navButton}
					onClick={() => {
						props.onPageChanged(lowGap);
					}}
				>
					...
				</button>
			)}
			{pages.map(p => (
				<button
					key={p}
					className={
						props.currentPage === p
							? `${styles.navButton} ${styles.buttonActive}`
							: styles.navButton
					}
					onClick={() => {
						if (props.currentPage !== p) {
							props.onPageChanged(p);
						}
					}}
				>
					{p}
				</button>
			))}
			{highGap <= pagesCount - 1 && (
				<button
					className={styles.navButton}
					onClick={() => {
						props.onPageChanged(highGap);
					}}
				>
					...
				</button>
			)}
			<button
				className={
					props.currentPage === pagesCount
						? `${styles.navButton} ${styles.buttonActive}`
						: styles.navButton
				}
				onClick={() => {
					if (props.currentPage !== pagesCount) {
						props.onPageChanged(pagesCount);
					}
				}}
			>
				{pagesCount}
			</button>
			<button
				className={
					props.currentPage === pagesCount
						? `${styles.navButton} ${styles.navButtonDis}`
						: styles.navButton
				}
				onClick={() => {
					if (props.currentPage < pagesCount) {
						props.onPageChanged(props.currentPage + 1);
					}
				}}
			>
				<div className={`${styles.buttonArrow} ${styles.buttonNext}`}></div>
			</button>
		</div>
	);
};

export default UsersPaginator;
